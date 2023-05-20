const userController = require("../controllers/userController");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  userController.displayAllUsers(req, res);
});

router.get("/:id", (req, res) => {
  userController.displayUser(req, res);
});

router.post("/", (req, res) => {
  userController.createUser(req, res);
});

router.delete("/:id", (req, res) => {
  userController.deleteUser(req, res);
});

router.patch("/:id", (req, res) => {
  userController.updateUser(req, res);
});

module.exports = router;
