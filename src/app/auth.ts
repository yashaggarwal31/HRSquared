import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { saltAndHashPassword } from '@/app/utils/password'
import type { Provider } from 'next-auth/providers'
import { getUserFromDb } from '@/lib/users'

const providers: Provider[] = [
  Credentials({
    name: 'Yash Login',
    id: '1',
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    credentials: {
      email: { label: 'Username', type: 'text', placeholder: 'jsmith' },
      password: { label: 'Password', type: 'password' }
    },
    authorize: async credentials => {
      console.log('these are credentials ', credentials)
      let user = null

      // logic to salt and hash password
      //   const pwHash = saltAndHashPassword(credentials.password)

      // logic to verify if user exists
      // user = await getUserFromDb(credentials.email, credentials.password)

      console.log('hello')

      console.log('email', credentials.email)
      console.log('password', credentials.password)

      return (user = {
        id: `${credentials.email}`,
        name: `${credentials.password}`,
        email: 'test@example.com'
      })

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
