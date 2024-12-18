"use server"
import { connectDb } from "../db/connectDb"
import Order from "../models/Order"
import Product from "../models/Product"

// get all the orders
export const fetchFoods = async () => {
    connectDb()
    const products = await Product.find({})
    const plainProducts = products.map((product) => {
        const plainProduct = {
            _id: product._id.toString(),
            name: product.name,
            price: product.price,
            image: product.image,
            description: product.description,
            ingredients: product.ingredients
        }
        return plainProduct
    })
    return {
        data: "Orders have been fetched!",
        success: true,
        products: plainProducts
    }
}

// place a order
export const createOrder = async (e) => {
    const data = Object.fromEntries(e)
    delete data.$ACTION_ID_7f81e2e40618c3dc6924a50f6c8d8130f5e0768871
    connectDb()
    await Order.create(data)
    return {
        data: "Order has been placed!",
        success: true
    }
}

// get the orders according to username
export const fetchUserOrders = async (username) => {
    connectDb()
    const userOrders = await Order.find({ name: username })
    const plainOrders = userOrders.map((order) => {
        const plainOrder = {
            _id: order._id.toString(),
            name: order.name,
            email: order.email,
            phone: order.phone,
            area: order.area,
            city: order.city,
            state: order.state,
            postcode: order.postcode,
            productname: order.productname,
            productprice: order.productprice
        }
        return plainOrder
    })
    return {
        data: "User orders have been fetched!",
        success: true,
        userOrders: plainOrders
    }
}

// create a product
export const createProduct = async (e) => {
    const data = Object.fromEntries(e)
    delete data.$ACTION_ID_7f81e2e40618c3dc6924a50f6c8d8130f5e0768871
    connectDb()
    await Product.create(data)
    return {
        data: "Your order has been selled!",
        success: true
    }
}