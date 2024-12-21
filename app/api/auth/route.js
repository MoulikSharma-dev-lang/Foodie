import { NextResponse } from "next/server";
import User from "@/app/models/User";
import { connectDb } from "@/app/db/connectDb.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";

// post method to login the user
export async function POST(request) {
    const cookieStore = await cookies()
    try {
        const data = await request.json()
        const saltRounds = 10
        connectDb()
        const hashedPassword = bcrypt.hashSync(data.password, saltRounds)
        await User.create({
            username: data.username,
            email: data.email,
            password: hashedPassword
        })
        const token = jwt.sign({ username: data.username, email: data.email }, process.env.JWT_SECRET)
        cookieStore.set("token", token, {
            httpOnly: true,
            sameSite: "strict",
            secure: true,
            maxAge: 60 * 60 * 24 * 7
        })
        return NextResponse.json({ data: "User has been logged in!", success: true }, { status: 200, statusText: "OK" })
    } catch (error) {
        return NextResponse.json({ data: "Error while logging in user", success: false })
    }
}

// delete method to logout the user
export async function DELETE(request) {
    const cookieStore = await cookies()
    try {
        connectDb()
        const token = cookieStore.get("token")
        const verifiedToken = jwt.verify(token.value, process.env.JWT_SECRET)
        await User.findOneAndDelete(verifiedToken.email)
        cookieStore.delete("token")
        return NextResponse.json({ data: "User has been logged out!", success: true }, { status: 200, statusText: "OK" })
    } catch (error) {
        return NextResponse.json({data: "Error while logging in user", success: false})
    }
}