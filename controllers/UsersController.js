const express = require("express");
const router = express.Router();

const userController = (col) => {
  router.get("/", function (req, res) {
    res.send("Wiki home page");
  });

  // About page route.
  router.get("/about", function (req, res) {
    res.send("About this wiki");
  });
  return router;
};
// Home page route.
module.exports = userController;
