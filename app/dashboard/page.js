import React from 'react'
import DashboardPage from '../components/DashboardPage';
import jwt from "jsonwebtoken"
import { cookies } from 'next/headers';

export default async function Dashboard() {
  const token = (await cookies()).get("token")
  const {username, email} = jwt.verify(token.value, process.env.JWT_SECRET)

  return (
    <>
      <DashboardPage username={username} email={email} />
    </>
  )
}