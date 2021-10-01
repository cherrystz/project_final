const express = require("express");
const app = express();

const port = 5001;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Server is Listening on port ${port}`);
});
