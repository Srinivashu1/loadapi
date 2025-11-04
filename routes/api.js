const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Alice" }]);
});

module.exports = router;
