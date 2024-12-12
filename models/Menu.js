import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});

export default mongoose.models.Menu || mongoose.model("Menu", MenuSchema);
