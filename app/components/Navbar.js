import Link from "next/link"
import { cookies } from "next/headers"
import Dropdown from "./Dropdown"

export default async function Navbar() {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")
    return (
            <nav className="bg-blue-950 text-white py-3 flex justify-between px-3">
                <div className="logo">
                    <Link href={"/"}><p className="text-2xl font-bold my-2">Foodie</p></Link>
                </div>
                <ul className="flex gap-2 py-2">
                    {!token && <Link href={"/login"} className="my-1">Login</Link>}
                    {token && <Dropdown />}
                    <Link href={"/menu"} className="my-1">Menu</Link>
                </ul>
            </nav>
    )
}