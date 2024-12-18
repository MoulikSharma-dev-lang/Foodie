"use client"
import React, {useState} from 'react'
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

export default function Login() {
    const router = useRouter()
    const [loginForm, setLoginForm] = useState({username: "", email: "", password: ""});

    const handleSubmit = async (e)=>{
        e.preventDefault()
        if (!loginForm.username || !loginForm.email || !loginForm.password){
            toast.error("Please write all credentials!", {position: "top-right"})
        }
        const headers = new Headers()
        headers.append("Content-Type", "application/json")
        const options = {
            method: "POST",
            body: JSON.stringify(loginForm),
            headers: headers
        }
        const req = await fetch("/api/auth", options)
        const res = await req.json()
        if (res.success){
            router.push("/dashboard")
        }
    }

    return (
        <>
        <main className="text-center my-2">
            <h1 className="text-4xl font-bold">Create an account on Foodie</h1>
            <br />
            <br />
            <form onSubmit={handleSubmit} className="text-center">
                <input value={loginForm.username} onChange={e=>{setLoginForm({...loginForm, [e.target.name]: e.target.value})}} type="text" name="username" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder="Enter your username" />
                <br />
                <br />
                <input value={loginForm.email} onChange={e=>{setLoginForm({...loginForm, [e.target.name]: e.target.value})}} type="email" name="email" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder="Enter your email" />
                <br />
                <br />
                <input value={loginForm.password} onChange={e=>{setLoginForm({...loginForm, [e.target.name]: e.target.value})}} type="password" name="password" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder="Enter your password" />
                <br />
                <br />
                <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>
            </form>
        </main>
        <ToastContainer />
        </>
    )
}