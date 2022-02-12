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
  const { name, id, profilePic } = req.user;
  const { title, content, imageId, communityId } = req.body;
  if (!communityId) {
    res.status(400).json("you have to add community");
  }
  try {
    const addedPost = await prisma.post.create({
      data: {
        authorName: name,
        title,
        content,
        authorId: parseInt(id),
        imageId,
        communityId: parseInt(communityId),
      },
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
router.get("/byUserId/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const post = await prisma.post.findMany({
      where: { authorId: parseInt(id) },
      include: { Like: true },
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/byCommunityId/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const posts = await prisma.post.findMany({
      where: { communityId: parseInt(id) },
      include: { Like: true },
    });
    res.status(200).json(posts);
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
