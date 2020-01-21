const express = require("express");
const router = express.Router();

// User Model
const User = require("../models/User");

router.post("/", function(req, res, next) {
  console.log("req.body: ", req.body);
  if (req.body.email === "gustavo@test.com" && req.body.password == "123") {
    User.findOne({ email: req.body.email }).then(user => {
      if (user) return "user already exists";
      const newUser = new User({
        email: req.body.email,
        password: req.body.password
      });
      newUser.save();
    });

    res.send({
      user: req.body.email.substr(0, req.body.email.indexOf("@")),
      logged: true
    });
  } else {
    res.send("xxx incorrect login details xxx");
  }
});

module.exports = router;
