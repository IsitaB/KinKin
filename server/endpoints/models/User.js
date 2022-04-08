const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    publicName: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    rating: {
      type: Int,
    },
    location: {
      type: String,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    onlineStatus: {
      type: Boolean,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "User",
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models && mongoose.models.User
    ? mongoose.models.User
    : mongoose.model("User", UserSchema);
