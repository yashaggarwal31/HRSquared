'use server'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { authConfig } from '@/auth.config'
import { z } from 'zod'
// import prisma from '@/prisma/db'
// import { getUserFromDb } from '@/lib/users'

// import { sql } from '@vercel/postgres';
// import type { User } from '@/app/lib/definitions';
// import bcrypt from 'bcrypt';

async function getUser (email: any, password: any): Promise<any | undefined> {
  // try {
  //   const user = await sql<User>`SELECT * FROM users WHERE email=${email}`
  //   return user.rows[0]
  // } catch (error) {
  //   console.error('Failed to fetch user:', error)
  //   throw new Error('Failed to fetch user.')

  // const user = await prisma.users.findFirst({
  //   where: {
  //     email: email,
  //     password: password
  //   }
  // })

  console.log('Prisma User**********')
  // console.log(user)
  // }

  return {
    name: 'Yash',
    email: 'yashaggarwal@gmail.com'
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize (credentials) {
        return {
          name: 'Yash',
          email: 'yashaggarwal@gmail.com'
        }
        // const parsedCredentials = z
        //   .object({ email: z.string().email(), password: z.string().min(6) })
        //   .safeParse(credentials)

        // if (parsedCredentials.success) {
        // console.log(parsedCredentials)
        const { email, password } = credentials
        console.log(email)
        const user = await getUser(email, password)
        return user

        console.log('Invalid Credentials')

        return null
      }
    })
  ]
})
