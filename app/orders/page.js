import { cookies } from "next/headers";
import jwt from "jsonwebtoken"
import OrdersPage from "../components/OrdersPage";

export default async function Orders() {
    const token = (await cookies()).get("token")
    const { username } = jwt.verify(token.value, process.env.JWT_SECRET)
    
    return (
        <OrdersPage username={username} />
    )
}