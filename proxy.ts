import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './i18n/config'

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
  localeDetection: true,
})

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Static files (e.g. favicon.ico, robots.txt)
  // - _next (Next.js internals)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
