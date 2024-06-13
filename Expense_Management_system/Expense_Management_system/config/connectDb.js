const mongoose = require("mongoose");
const express = require("express");
const colors = require("colors");
const app=express();
const PORT = process.env.PORT || 8081
const connectDb = async () => {
  try {
    const conn=await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected: ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
    process.exit(1)
  }
};

module.exports = connectDb;