import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(request){
    const cookieStore = await cookies()
    const token = cookieStore.get("token")

    if (request.nextUrl.pathname.endsWith("/dashboard") || request.nextUrl.pathname.endsWith("/createorder") || request.nextUrl.pathname.endsWith("/orders") || request.nextUrl.pathname.endsWith("/createproduct")){
        if (!token){
            return NextResponse.redirect(`http://localhost:3000/login`)
        } else {

        }
    }
    else if (request.nextUrl.pathname.endsWith("/login")){
        if (token){
            return NextResponse.redirect(`http://localhost:3000/dashboard`)
        } else {

        }
    }
}