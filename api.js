const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("ไอเหี้ยมิ้ว");
});

module.exports = router;
