"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function DashboardPage({ username, email }) {
    const router = useRouter()

    const handleLogout = async () => {
        const req = await fetch("/api/auth", {method: "DELETE"})
        const res = await req.json()
        if (res.success) {
            
        }
        router.push("/login")
    }

    return (
        <main className='text-center'>
            <h1 className="text-4xl font-bold text-center my-3">Welcome to your Dashboard!</h1>
            <br />
            <br />
            <input type="text" name="username" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={username} readOnly />
            <br />
            <br />
            <input type="email" name="email" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={email} readOnly />
            <br />
            <br />
            <div className="text-center">
                <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={handleLogout}>Logout</button>
            </div>
        </main>
    )
}