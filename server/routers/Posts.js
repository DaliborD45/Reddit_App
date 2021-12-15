const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { checkAuth } = require("../middlewares/AuthMiddlewaware");

router.get("/", async (req, res) => {
  const allPosts = await prisma.post.findMany({ include: { Like: true } });
  res.status(200).json(allPosts);
});
router.post("/addPost", checkAuth, async (req, res) => {
  const authorName = req.user.name;
  const { title, content, imageId, communityId } = req.body;
  if (!communityId) {
    res.status(400).json("you have to add community");
  }
  const authorId = req.user.id;
  try {
    const addedPost = await prisma.post.create({
      data: { authorName, title, content, authorId, imageId, communityId },
    });
    res.status(200).json(addedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/posts/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(id) },
      include: { Like: true },
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/deletePost/:id", checkAuth, async (req, res) => {
  const id = req.params.id;
  try {
    const post = await prisma.post.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
