const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
  res.send("respuesta desde display.js");
});

module.exports = router;
