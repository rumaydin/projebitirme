import mongoose, { Schema } from "mongoose";
const productSchema = new Schema({
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
});
const Product =
    mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;