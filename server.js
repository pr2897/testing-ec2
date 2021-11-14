const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  res.status(200).json({
    message: "I am live now!",
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`);
});
