//use schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  password: String,
  backgroundColor: String,
  teamInfo: {
    teamId: String,
    teamName: String,
    teamMember: Boolean,
    role: String,
    status: String,
  },
  isAdmin: Boolean,
  date: Date,
});

module.exports = mongoose.model("User", UserSchema);
