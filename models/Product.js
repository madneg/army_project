// getting-started.js
const mongoose = require("mongoose");
// import mongoose, { connect } from "mongoose";
const ProductSchema = new mongoose.Schema(
  {
    army: { type: String, required: true },
    study: { type: String, required: true },
    gender: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    title_age: { type: String, required: true },
    title_qualification: { type: String, required: true },
    title_eligibility: { type: String, required: true },
    title_post: { type: String, required: true },
    // price: { type: Number, required: true },
    // availableQty: { type: String },
  },
  { timestamps: true }
);
// mongoose.models = {};
// export default mongoose.model("Product", ProductSchema);
export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
