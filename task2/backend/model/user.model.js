const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  mobileNo: String,
  email: String,
  address: {
    street: String,
    city: String,
    state: String,
    country: String
  },
  loginId: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const UserModle = mongoose.model('User', userSchema);
module.exports ={UserModle}