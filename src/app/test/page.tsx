
import { SessionProvider } from "next-auth/react"
import SessionTest from "./sessiontest"

 
export default async function UserAvatar() {
  
 
  return (
    <div>
      <SessionProvider>
      <SessionTest/>
      </SessionProvider>
      
    </div>
  )
}