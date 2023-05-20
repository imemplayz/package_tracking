//use schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  date: Date,
});

module.exports = mongoose.model("User", UserSchema);
