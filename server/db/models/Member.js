const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MemberSchema = new Schema({
  mundaneFirstName: String,
  mundaneLastName: String,
  scaFirstName: String,
  scaLastName: String,
  registeredName: Boolean,
  registeredArms: Boolean,
  singlesFighter: Boolean,
  combatArcher: Boolean,
  meleeFighter: Boolean,
  authorizedForms: [String],
  gearStatus: Boolean,
  memberStatus: String,
  admin: Boolean,
  rank: String,
  image: String,
  arms: String,
  notes: String,
});

const MemberModel = mongoose.model('Member', MemberSchema)

module.exports = MemberModel
