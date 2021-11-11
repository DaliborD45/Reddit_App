const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");
const usersRouter = require("./routers/Users");
app.use(express.json());
app.use(cors());
app.use("/users", usersRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
