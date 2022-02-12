const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const { checkAuth } = require("../middlewares/AuthMiddlewaware");
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const allComments = await prisma.comment.findMany({});
    return res.status(200).json(allComments);
  } catch (error) {
    return res.status(500).json(error);
  }
});
router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const allComments = await prisma.comment.findMany({
      where: { postId: parseInt(id) },
    });
    return res.status(200).json(allComments);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.post("/", checkAuth, async (req, res) => {
  try {
    const { name, profilePic } = req.user;
    const { content, postId } = req.body;
    const allComments = await prisma.comment.create({
      data: {
        authorName: name,
        content: content,
        postId: postId,
        authorProfilePic: profilePic,
      },
    });
    return res.status(200).json(allComments);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
