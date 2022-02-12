const express = require("express");
const router = express.Router();
require("dotenv").config();

const { body, validationResult } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const { checkAuth } = require("../middlewares/AuthMiddlewaware");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

router.post(
  "/register",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  async (req, res) => {
    const { name, email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let isUserAlreadyRegistered = await prisma.user.findFirst({
      where: { email: email },
    });
    if (isUserAlreadyRegistered) {
      return res.status(400).json({
        errors: [
          {
            value: "",
            msg: "User Already exists",
            param: "email",
            location: "body",
          },
        ],
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    res.status(200).json("user registered");
  }
);
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findFirst({
    where: { email: email },
  });
  if (!user) {
    return res.status(400).json("Invalid Credentials");
  } else {
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json("Invalid Credentials");
    }

    const token = await JWT.sign(
      {
        email,
        id: user.id,
        createdAt: user.createdAt,
        name: user.name,
        profilePic: user.ProfilePic,
      },
      process.env.DB_KEY
    );
    res.status(200).json(token);
  }
});

router.put("/updateUser", checkAuth, async (req, res) => {
  const { updatedName, profilePicString } = req.body;
  const { name, email } = req.user;
  if (updatedName.length > 0) {
    const kys = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        name: updatedName,
      },
    });
  }
  if (profilePicString) {
    const kys = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        ProfilePic: profilePicString,
      },
    });
  }

  return res.status(200).json("updated");
});

router.get("/getUserData", checkAuth, async (req, res) => {
  res.status(200).json(req.user);
});

module.exports = router;
