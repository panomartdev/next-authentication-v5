"use client"
import { LoginButton } from '@/components/auth/login-button'
import { useRouter } from "next/navigation";
import { Button } from '@/components/ui/button'
import React from 'react'

export default function Home() {

  const router = useRouter()
  return (
    <main className='flex min-h-screen items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-800 to-sky-600'>
        <div className='space-y-6'>
            <h1 className='text-6xl font-semibold text-white drop-show-md'>
                🔐 Authentication V5
            </h1>
            <p className='text-white text-center'> Authentication Service</p>
            <div className='flex justify-center'>
               <LoginButton mode="modal" asChild>
                  <Button variant="secondary" size="lg">
                      Sign in
                  </Button>
               </LoginButton>
            </div>
        </div>
    </main>
  )
}
