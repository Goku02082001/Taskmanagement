import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  category: { type: String, required: true },
  subcategory: { type: String },
  productname: { type: String },
  image: { type: String, required: true }, // Image URL
  shortDesc: { type: String },
  desc: [
    {
      title: String,
      heading: String,
      content: String,
    },
  ],
  feature: [{ content: String }],
  uploadfile: [
    {
      heading: String,
      fileUrl: String, // PDF or file URL
    },
  ],
});

const productModel =
  mongoose.models.products || mongoose.model("product", ProductSchema);
export default productModel;
