import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const USER = mongoose.models.users || mongoose.model("users", userSchema);
export default USER;
