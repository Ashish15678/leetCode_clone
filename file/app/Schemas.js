const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  profilePic: String,
  name: String,
  PostMessage: String,
  postNumber: Number,
});

const UserSchema = new mongoose.Schema({
  profilePic: String,
  userName: String,
  premium: Boolean,
  gmail: String,
  isConnectedToGithub: Boolean,
  password: String,
});

const Post = new mongoose.model("Post", PostSchema);
const User = new mongoose.model("User", UserSchema);

export { Post, User };
