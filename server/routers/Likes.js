const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const { checkAuth } = require("../middlewares/AuthMiddlewaware");
const prisma = new PrismaClient();

router.post("/", checkAuth, async (req, res) => {
  const authorId = req.user.id;
  const { status, postId } = req.body;
  const isVotedAlready = await prisma.like.findFirst({
    where: { authorId: parseInt(authorId), postId: parseInt(postId) },
  });
  if (
    (isVotedAlready &&
      status === "Upvote" &&
      isVotedAlready.status === "Upvote") ||
    (isVotedAlready &&
      status === "Downvote" &&
      isVotedAlready.status === "Downvote")
  ) {
    return res.status(409).json("already Voted");
  }

  if (
    isVotedAlready &&
    isVotedAlready.status === "Downvote" &&
    status === "Upvote"
  ) {
    const detroyedLike = await prisma.like.delete({
      where: { id: isVotedAlready.id },
    });
    const newDownVote = await prisma.like.create({
      data: {
        authorId: parseInt(authorId),
        postId: parseInt(postId),
        type: status,
        value: status === "Upvote" ? 1 : -1,
      },
    });
    return res.status(200).json(detroyedLike);
  }
  if (
    isVotedAlready &&
    isVotedAlready.status === "Upvote" &&
    status === "Downvote"
  ) {
    const detroyedLike = await prisma.like.delete({
      where: { id: isVotedAlready.id },
    });
    const newDownVote = await prisma.like.create({
      data: {
        authorId: parseInt(authorId),
        postId: parseInt(postId),
        type: status,
        value: status === -1,
      },
    });
    return res.status(200).json(detroyedLike);
  }

  if (
    (!isVotedAlready && status === "Upvote") ||
    (!isVotedAlready && status === "Downvote")
  ) {
    const like = await prisma.like.create({
      data: {
        authorId: parseInt(authorId),
        postId: parseInt(postId),
        type: status,
        value: status === "Upvote" ? 1 : -1,
      },
    });
    return res.status(200).json(like);
  }
});

module.exports = router;
