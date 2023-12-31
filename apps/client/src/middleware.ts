import { withAuth } from 'next-auth/middleware'

export default withAuth({
  pages: {
    signIn: '/sign-in',
    error: '/auth/error'
  }
})

export const config = {
  matcher: ['/', '/settings/:path*']
}
