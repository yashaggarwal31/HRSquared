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

      {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}
      <label>
        Username
        <input name="username" type="text" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      {/* <button type="submit">Sign in</button> */}


          <button type="submit">
            <span>Sign in with {provider.name}</span>
          </button>
        </form>
      ))}
    </div>
  )
}


      
