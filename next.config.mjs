import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect old routes to new routes (308 permanent for SEO)
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
      {
        source: '/:locale/what-is-it-and-how-does-it-work',
        destination: '/:locale',
        permanent: true,
      },
      {
        source: '/:locale/invest-in-ethichub',
        destination: '/:locale',
        permanent: true,
      },
      {
        source: '/es/token-ethix',
        destination: 'https://ethichub.gitbook.io/ethichub/mecanismos-de-financiamiento-y-garantia/ethix',
        permanent: true,
      },
      {
        source: '/en/token-ethix',
        destination: 'https://ethichub.gitbook.io/ethichub/en/financing-and-guarantee-mechanisms/ethix',
        permanent: true,
      },
    ]
  },
}

export default withNextIntl(nextConfig)
