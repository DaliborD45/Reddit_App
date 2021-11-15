const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { checkAuth } = require("../middlewares/AuthMiddlewaware");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { Users } = require("../models/");
router.get("/", async (req, res) => {
  res.send("test server");
});

router.post(
  "/register",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  async (req, res) => {
    const { username, email, password, preffered_posts } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let isUserAlreadyRegistered = await Users.findOne({
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
    const user = await Users.create({
      username,
      email,
      password: hashedPassword,
      preffered_posts,
    });

    res.status(200).json("user registered");
  }
);
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({
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
        preffered_posts: user.preffered_posts,
        username: user.username,
      },
      "exkp0487k0vyhu8"
    );
    res.status(200).json(token);
  }
});
router.get("/getUserData", checkAuth, (req, res) => {
  res.status(200).json(req.user);
});
module.exports = router;
