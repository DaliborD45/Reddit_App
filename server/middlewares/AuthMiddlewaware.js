const JWT = require("jsonwebtoken");
require("dotenv").config();
const checkAuth = async (req, res, next) => {
  const token = req.header("authToken");
  if (!token) {
    return res.status(409).json("No Token Found");
  }
  try {
    let validToken = await JWT.verify(token, process.env.DB_KEY);
    req.user = validToken;
    if (validToken) {
      next();
    }
  } catch (e) {
    res.status(400).json({
      errors: [
        {
          value: "",
          msg: "Invalid Token",
          param: "email",
          location: "body",
        },
      ],
    });
  }
};
module.exports = { checkAuth };
