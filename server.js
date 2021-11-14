const express = require("express");

const app = express();

const router = express.Router();

router.route("/").get((req, res, next) => {
  res.status(200).json({
    message: "Live here",
  });
});

router.route("/test").get((req, res, next) => {
  res.status(200).json({ message: "testing here", user: "piyush" });
});

app.use("/", router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`);
});
