'use client'
import { signIn } from "@/app/auth"
 
export default function SignIn() {
  return <button onClick={() => signIn()}>Sign In</button>
}