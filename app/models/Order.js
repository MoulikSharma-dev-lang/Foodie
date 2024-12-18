import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number, required: true},
    area: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    postcode: {type: Number, required: true},
    productname: {type: String, required: true},
    productprice: {type: Number, required: true}
})

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema)
export default Order