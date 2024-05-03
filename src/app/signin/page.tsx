import { signIn, auth, providerMap } from "@/app/auth"
 
export default async function SignInPage() {
  return (
    <div className="flex flex-col gap-2">
      {Object.values(providerMap).map((provider) => (
        <form
          action={async () => {
            "use server"
            await signIn(provider.id)
          }}
        >

            <label htmlFor="email">Email: </label>
            <input name='email' type="text" />

            <label htmlFor="password">Password: </label>
            <input name='password' type="text" />


          <button type="submit">
            <span>Sign in with {provider.name}</span>
          </button>
        </form>
      ))}
    </div>
  )
}