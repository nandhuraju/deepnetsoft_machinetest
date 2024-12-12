import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true }, // New field for the image URL
  menuId: { type: mongoose.Schema.Types.ObjectId, ref: "Menu", required: true },
});

export default mongoose.models.Item || mongoose.model("Item", ItemSchema);
