'use client'
import { useSession } from "next-auth/react"

 
export default function SessionTest() {
    const session = useSession()
 
    // if (!session.user) return null
  
    console.log('User session is on!!', session)

  console.log('User session is on!!', session)
 
  return (
    <div>
      
    </div>
  )
}