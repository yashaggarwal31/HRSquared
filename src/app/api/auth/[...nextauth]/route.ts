import NextAuth from 'next-auth'
import { config } from '@/auth.config'

const handler = NextAuth({
  ...config
})

export { handler as GET, handler as POST }
