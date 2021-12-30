const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", require("./routers/Users"));
app.use("/posts", require("./routers/Posts"));
app.use("/community", require("./routers/Community"));
app.use("/comments", require("./routers/Comments"));
app.use("/likes", require("./routers/Likes"));
app.use("/communityuser", require("./routers/CommunityUser"));

app.listen(process.env.PORT||3001, () => {
  console.log("Listening on port 3001");
});
