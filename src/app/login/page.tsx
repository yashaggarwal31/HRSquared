
import LoginForm from '@/components/auth/loginform';
import { signIn } from '@/app/auth'
import { AuthError } from 'next-auth'

// ...

export async function authenticate (
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn('credentials', formData)
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            {/* <AcmeLogo /> */}
            hello
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}