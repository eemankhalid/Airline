import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  nationality: String,
  country: String,
  mobile: String,
  dob: String,
  passport: String,
  preferredLanguage: String,
  referringMemberEmail: String,
  userId: String,
});

const User = mongoose.model('User', userSchema);
export default User;