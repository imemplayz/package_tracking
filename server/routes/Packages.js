const packageController = require("../controllers/packageController");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  packageController.displayAllPackages(req, res);
});

router.get("/:id", (req, res) => {
  packageController.displayPackage(req, res);
});

module.exports = router;
