"use client"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { createProduct } from "../actions/userActions"

export default function CreateProduct() {
    return (
        <main className="flex items-center justify-center p-12">
            <section className="mx-auto w-full max-w-[550px] bg-white">
                <form action={(e) => { createProduct(e); toast("You have successfully selled your product!", { position: "top-right" }) }}>
                    <div className="mb-5">
                        <label htmlFor="productname" className="mb-3 block text-base font-medium text-[#07074D]">
                            Product Name
                        </label>
                        <input type="text" name="name" placeholder="Enter your product name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="productprice" className="mb-3 block text-base font-medium text-[#07074D]">
                            Product Description
                        </label>
                        <input type="text" name="description" placeholder="Enter your product description"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="productprice" className="mb-3 block text-base font-medium text-[#07074D]">
                            Product Price
                        </label>
                        <input type="text" name="price" placeholder="Enter your product price"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="productimage" className="mb-3 block text-base font-medium text-[#07074D]">
                            Product Image
                        </label>
                        <input type="text" name="image" placeholder="Enter your product image url"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div>
                        <button
                            className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            Sell Product
                        </button>
                    </div>
                </form>
            </section>
            <ToastContainer />
        </main>
    )
}