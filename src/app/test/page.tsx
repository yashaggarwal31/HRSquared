import { auth } from "@/app/auth"
 
export default async function UserAvatar() {
  const session = await auth()
 
  if (!session.user) return null

  console.log('User session is on!!', session)
 
  return (
    <div>
      
    </div>
  )
}