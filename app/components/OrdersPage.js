"use client"
import { useEffect, useState } from "react";
import { fetchUserOrders } from "../actions/userActions";

export default function OrdersPage({username}) {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        getOrders()
    }, [])

    const getOrders = async () => {
        const gotOrders = await fetchUserOrders(username)
        setOrders(gotOrders.userOrders)
    }

    return (
        <main>
            <section className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Food name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => {
                            return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {order.productname}
                                </th>
                                <td className="px-6 py-4">
                                    {order.productprice}
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </section>
        </main>
    )
}