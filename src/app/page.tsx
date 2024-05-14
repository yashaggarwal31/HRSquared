'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { SignUp, useUser } from "@clerk/nextjs";


export default function page() {
  const router = useRouter();
  const { user } = useUser();
    
   useEffect(()=>{
    if (!user) {
      router.push('/signup')
    }
    else router.push('/user/ticket')
   },[])
    
  

  return <div>Welcome!</div>;
}

