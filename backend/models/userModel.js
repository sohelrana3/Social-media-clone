const { text } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { ObjectId } = mongoose.Schema;

const userModel = new Schema(
  {
    fname: {
      type: String,
      require: true,
      trim: true,
      text: true,
    },
    lname: {
      type: String,
      require: true,
      trim: true,
      text: true,
    },
    username: {
      type: String,
      require: true,
      unique: true,
      trim: true,
      text: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
    },
    profilepicture: {
      type: String,
      default: "",
    },
    coverpicture: {
      type: String,
      trim: true,
    },
    bday: {
      type: Number,
      require: true,
    },
    bmonth: {
      type: Number,
      require: true,
    },
    byear: {
      type: Number,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    veryfied: {
      type: Boolean,
      default: false,
    },
    friend: [
      {
        type: ObjectId,
        ref: "userModel",
      },
    ],
    followers: [
      {
        type: ObjectId,
        ref: "userModel",
      },
    ],
    following: [
      {
        type: ObjectId,
        ref: "userModel",
      },
    ],
    request: [
      {
        type: ObjectId,
        ref: "userModel",
      },
    ],
    search: [
      {
        user: {
          type: ObjectId,
          ref: "userModel",
          require: true,
          text: true,
        },
        creatAt: {
          type: Date,
          require: true,
        },
      },
    ],
    details: {
      bio: {
        type: String,
      },
      othername: {
        type: String,
      },
      currentcity: {
        type: String,
      },
      workplace: {
        type: String,
      },
      highschool: {
        type: String,
      },
      college: {
        type: String,
      },
      hometown: {
        type: String,
      },
      relationship: {
        type: String,
        enum: [
          "Single",
          "In A relationship",
          "It 's Complicated",
          "Married",
          "Divorced",
        ],
      },
      instagram: {
        type: String,
      },
    },
    savepost: [
      {
        post: {
          type: ObjectId,
          ref: "Post",
        },
        saveAt: {
          type: Date,
          require: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("userModle", userModel);
