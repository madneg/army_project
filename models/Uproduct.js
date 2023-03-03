const mongoose = require("mongoose");
const UproductSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    title_age: { type: String, required: true },
    title_qualification: { type: String, required: true },
    title_eligibility: { type: String, required: true },
    title_post: { type: String, required: true },
  },
  { timestamps: true }
);
export default mongoose.models.Uproduct ||
  mongoose.model("Uproduct", UproductSchema);
