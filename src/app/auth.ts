'use server'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { authConfig } from '@/auth.config'
import { z } from 'zod'
import { getUserFromDb } from '@/lib/users'

// import { sql } from '@vercel/postgres';
// import type { User } from '@/app/lib/definitions';
// import bcrypt from 'bcrypt';

async function getUser (email: string, password: any): Promise<any | undefined> {
  // try {
  //   const user = await sql<User>`SELECT * FROM users WHERE email=${email}`
  //   return user.rows[0]
  // } catch (error) {
  //   console.error('Failed to fetch user:', error)
  //   throw new Error('Failed to fetch user.')
  // }

  return {
    id: '1',
    name: 'Yash',
    email: email,
    pass: password
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize (credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials)

        if (parsedCredentials.success) {
          console.log(parsedCredentials)
          const { email, password } = parsedCredentials.data
          const user = await getUser(email, password)
          if (!user) return null
          return user
        }

        console.log('Invalid Credentials')

        return null
      }
    })
  ]
})
