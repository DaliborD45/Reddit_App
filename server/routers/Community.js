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
  const { name, type, adultContent, description } = req.body;
  const { id } = req.user;
  const isCommunityCreated = await prisma.community.findFirst({
    where: { name },
  });
  if (isCommunityCreated) {
    return res.status(400).json("Community is already created");
  } else {
    try {
      const addedCommunity = await prisma.community.create({
        data: {
          name,
          type,
          adultContent,
          creatorId: parseInt(id),
          description,
        },
      });
      return res.status(200).json(addedCommunity);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
});

router.get("/", async (req, res) => {
  try {
    const allCommunities = await prisma.community.findMany({
      include: { Posts: true },
    });
    return res.status(200).json(allCommunities);
  } catch (error) {
    return res.status(500).json(error);
  }
});
router.get("/byId/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const finded = await prisma.community.findFirst({
      where: { id: parseInt(id) },
    });
    return res.status(200).json(finded);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.put("/updateCommunity", async (req, res) => {
  const { communityId, updatedName, communityPic, updatedCommunityTypes } =
    req.body;
  try {
    if (updatedName.length > 1) {
      const updatedCommunity = await prisma.community.update({
        where: {
          id: parseInt(communityId),
        },
        data: {
          name: updatedName,
        },
      });
    }
    if (communityPic) {
      const updatedCommunity = await prisma.community.update({
        where: {
          id: parseInt(communityId),
        },
        data: {
          profilePic: communityPic,
        },
      });
    }
    if (updatedCommunityTypes) {
      const updatedCommunity = await prisma.community.update({
        where: {
          id: parseInt(communityId),
        },
        data: {
          type: updatedCommunityTypes,
        },
      });
    }
    return res.status(200).json("updated");
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get("/byUserId", checkAuth, async (req, res) => {
  const { id } = req.user;
  try {
    const response = await prisma.community.findMany({
      where: { creatorId: id },
    });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
