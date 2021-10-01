const express = require("express");
const app = express();

const port = 5001;

app.get("/", (req, res) => {
  res.send("hello my friends");
});

app.listen(port, () => {
  console.log(`Server is Listening on port ${port}`);
});
