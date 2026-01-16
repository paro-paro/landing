import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect old routes to new routes (301 permanent for SEO)
      {
        source: '/:locale/our-farmers',
        destination: '/:locale/farmers',
        permanent: true,
      },
      {
        source: '/:locale/green-coffee',
        destination: '/:locale/coffee',
        permanent: true,
      },
    ]
  },
}

export default withNextIntl(nextConfig)
