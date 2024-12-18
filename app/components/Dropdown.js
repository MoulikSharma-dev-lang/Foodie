"use client"
import Link from "next/link";
import { useState } from "react"

export default function Dropdown() {
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <div className="py-0">
            <button onBlur={()=>{setTimeout(() => {
                setShowDropdown(false)
            }, 200);}} onClick={() => { setShowDropdown(!showDropdown) }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome!<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
            </button>
            {showDropdown && <div  id="dropdown" className="z-10 bg-white divide-y absolute divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                    </li>
                    <li>
                        <Link href="/createorder" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Create Order</Link>
                    </li>
                    <li>
                        <Link href="/orders" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Orders</Link>
                    </li>
                    <li>
                        <Link href="/createproduct" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sell Product</Link>
                    </li>
                </ul>
            </div>}
        </div>
    )
}