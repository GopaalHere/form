const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob:{type:String, required: true},
  email:{type: String, required: true},
  address: { type: String, required: true },
  sex:{type: String, required: true},
});

const User = mongoose.model('User', userSchema);
module.exports = User;
