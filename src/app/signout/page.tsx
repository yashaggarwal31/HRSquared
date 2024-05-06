import { signOut } from "@/app/auth"
 
export default function SignOutPage() {
  return (
    <div>
      <h5>Are you sure you want to sign out?</h5>
      <form
        action={async (formData) => {

          "use server"
          console.log('sign out clicked')
          await signOut({redirectTo:'/login'})
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div>
  )
}