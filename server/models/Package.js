//use schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PackageSchema = new Schema({
  courier: String,
  courier_id: String,
  provider: String,
  date: Date,
  from: String,
  to: String,
  status: String,
});

module.exports = mongoose.model("Package", PackageSchema);
