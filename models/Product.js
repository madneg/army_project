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
    selection_title: { type: String, required: true },
    selection_physical1: { type: String, required: true },
    selection_physical2: { type: String, required: true },
    selection_physical3: { type: String, required: true },
    selection_writtenp: { type: String, required: true },
    selection_writtenp1: { type: String, required: true },
    selection_writtenp2: { type: String, required: true },
    selection_writtenp3: { type: String, required: true },
  },
  { timestamps: true }
);
// mongoose.models = {};
// export default mongoose.model("Product", ProductSchema);
export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
