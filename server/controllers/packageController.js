const express = require("express");
const cors = require("cors");

const app = express();

const Package = require("../models/Package");

app.use(cors());

//display all packages
const displayAllPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//display a single package
const displayPackage = async (req, res) => {
  try {
    const packageId = req.params.id;
    const package = await Package.findById(packageId);

    if (!package) {
      return res.status(404).json({ error: "package not found" });
    }

    res.json(package);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//export
module.exports = {
  displayAllPackages,
  displayPackage,
};
