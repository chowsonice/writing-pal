
import { useState } from 'react'
import Layout from '../components/Layout'
import { UserButton } from "@clerk/nextjs";

export default function Login() {
  return (
    <Layout>
      <div>
      <UserButton afterSignOutUrl="/"/>
      </div>
    </Layout>
  )
}