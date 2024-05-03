import { signIn, auth, providers } from "@/app/auth"
 
export default async function SignInPage() {
  return (
    <div className="flex flex-col gap-2">
      {Object.values(providers).map((provider) => (
        <form
          action={async (formdata) => {
            "use server"
            ;

            console.log(formdata.get('email'))
            
            signIn('credentials',{
              email:formdata.get('email'),
              password:formdata.get('password'),
              redirect:false,
            })
          }}
        >

      {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}
      <label>
        Username
        <input name="email" type="text" placeholder="jsmith" />
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


      
