import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    price: {type: Number, required: true},
    description: {type: String, required: true, unique: true},
    image: {type: String, required: true, unique: true}
})

const Product = mongoose.models.Product || mongoose.model("Product", productSchema)
export default Product