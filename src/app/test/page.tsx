

 import {auth} from '@/app/auth'
export default async function UserAvatar() {

  const session = await auth();
  console.log('Here is the session: ',session);
  return (
    <div>
      
      
    </div>
  )
}