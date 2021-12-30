const express = require("express");
const router = express.Router();
const { checkAuth } = require("../middlewares/AuthMiddlewaware");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.delete("/unsubscribe/:id", checkAuth, async (req, res) => {
  const userId = req.user.id;
  const commId = req.params.id;

  try {
    const deleteSubscription = await prisma.communityUser.delete({
      where: {
        userId: parseInt(userId),
        communityId: parseInt(commId),
      },
    });
    res.status(200).json(deleteSubscription);
  } catch (error) {
    return res.status(400).json(error);
  }
});
router.post("/subscribe", checkAuth, async (req, res) => {
  const userId = req.user.id;
  const { communityId } = req.body;
  try {
    const createSubscription = await prisma.communityUser.create({
      data: {
        userId: parseInt(userId),
        communityId: parseInt(communityId),
      },
    });
    res.status(200).json(createSubscription);
  } catch (error) {
    return res.status(400).json(error);
  }
});
router.get("/isSubscribed/:id", checkAuth, async (req, res) => {
  const userId = req.user.id;
  const commId = req.params.id;
  try {
    const result = await prisma.communityUser.findFirst({
      where: { userId: parseInt(userId), communityId: parseInt(commId) },
    });
    if (result) {
      return res.status(200).json(result);
    } else {
      return res.status(205).json("no community");
    }
  } catch (e) {
    return res.status(400).json(e);
  }
});
module.exports = router;
