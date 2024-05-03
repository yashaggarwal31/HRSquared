import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { saltAndHashPassword } from '@/app/utils/password'
import type { Provider } from 'next-auth/providers'

const providers: Provider[] = [
  Credentials({
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    credentials: {
      email: {},
      password: {}
    },
    authorize: async credentials => {
      let user = null

      // logic to salt and hash password
      //   const pwHash = saltAndHashPassword(credentials.password)

      // logic to verify if user exists
      // user = await getUserFromDb(credentials.email, pwHash)

      console.log('email', credentials.email)
      console.log('password', credentials.password)

      return {
        id: 'test',
        name: 'Test User',
        email: 'test@example.com'
      }

      if (!user) {
        // No user found, so this is their first attempt to login
        // meaning this is also the place you could do registration
        throw new Error('User not found.')
      }

      // return user object with the their profile data
      return user
    }
  })
]

export const providerMap = providers.map(provider => {
  if (typeof provider === 'function') {
    const providerData = provider()
    return { id: providerData.id, name: providerData.name }
  } else {
    return { id: provider.id, name: provider.name }
  }
})

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  pages: {
    signIn: '/signin'
  }
})
