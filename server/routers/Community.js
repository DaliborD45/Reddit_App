const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const { checkAuth } = require("../middlewares/AuthMiddlewaware");
const prisma = new PrismaClient();
router.get("/", async (req, res) => {
  const allPosts = await prisma.community.findMany();
  res.status(200).json(allPosts);
});
router.post("/createCommunity", checkAuth, async (req, res) => {
  const { name, type, adultContent } = req.body;
  try {
    const addedCommunity = await prisma.community.create({
      data: {
        name,
        type,
        adultContent,
      },
    });
    res.status(200).json(addedCommunity);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
