const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const { checkAuth } = require("../middlewares/AuthMiddlewaware");
const prisma = new PrismaClient();

router.put("/", checkAuth, async (req, res) => {
  const authorId = req.user.id;
  const { type, postId } = req.body;
  const isVotedAlready = await prisma.like.findFirst({
    where: { authorId: parseInt(authorId), postId: parseInt(postId) },
  });
  if (
    (isVotedAlready && type === "Upvote" && isVotedAlready.type === "Upvote") ||
    (isVotedAlready &&
      type === "Downvote" &&
      isVotedAlready.type === "Downvote")
  ) {
    return res.status(200).json(0);
  }

  if (
    isVotedAlready &&
    isVotedAlready.type === "Downvote" &&
    type === "Upvote"
  ) {
    const detroyedLike = await prisma.like.delete({
      where: { id: isVotedAlready.id },
    });
    const newDownVote = await prisma.like.create({
      data: {
        authorId: parseInt(authorId),
        postId: parseInt(postId),
        type: type,
        value: 1,
      },
    });
    return res.status(200).json(2);
  }
  if (
    isVotedAlready &&
    isVotedAlready.type === "Upvote" &&
    type === "Downvote"
  ) {
    const detroyedLike = await prisma.like.delete({
      where: { id: isVotedAlready.id },
    });
    const newDownVote = await prisma.like.create({
      data: {
        authorId: parseInt(authorId),
        postId: parseInt(postId),
        type,
        value: -1,
      },
    });
    return res.status(200).json(-2);
  }

  if (
    (!isVotedAlready && type === "Upvote") ||
    (!isVotedAlready && type === "Downvote")
  ) {
    const like = await prisma.like.create({
      data: {
        authorId: parseInt(authorId),
        postId: parseInt(postId),
        type,
        value: type === "Upvote" ? 1 : -1,
      },
    });
    return res.status(200).json(type === "Upvote" ? 1 : -1);
  }
});

router.delete("/deleteAll", async (req, res) => {
  try {
    await prisma.like.deleteMany();
    return res.status(200).json("All votes have been removed");
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get("/getPostByid", checkAuth, async (req, res) => {
  const { status, postId } = req.body;
  const authorId = req.user.id;

  try {
    const post = await prisma.like.findFirst({
      where: { authorId: parseInt(authorId), postId: parseInt(postId) },
    });

    return res.status(200).json(post.postId);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
