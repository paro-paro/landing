import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect old routes to new routes (308 permanent for SEO)
      {
        source: "/:locale/our-farmers",
        destination: "/:locale/farmers",
        permanent: true,
      },
      {
        source: "/:locale/green-coffee",
        destination: "/:locale/coffee",
        permanent: true,
      },
      {
        source: "/:locale/what-is-it-and-how-does-it-work",
        destination: "/:locale",
        permanent: true,
      },
      {
        source: "/:locale/invest-in-ethichub",
        destination: "/:locale",
        permanent: true,
      },
      // Docs index redirects
      {
        source: "/es/docs",
        destination: "/es/docs/introduccion/ethichub",
        permanent: false,
      },
      {
        source: "/en/docs",
        destination: "/en/docs/introduction/ethichub",
        permanent: false,
      },
      {
        source: "/es/token-ethix",
        destination: "/es/docs/mecanismos-de-financiamiento-y-garantia/ethix",
        permanent: true,
      },
      {
        source: "/en/token-ethix",
        destination: "/en/docs/financing-and-guarantee-mechanisms/ethix",
        permanent: true,
      },
      // terms
      {
        source: "/es/terminos-y-condiciones",
        destination: "/es/terms",
        permanent: true,
      },
      {
        source: "/es/terms-and-conditions",
        destination: "/es/terms",
        permanent: true,
      },
      {
        source: "/en/terminos-y-condiciones",
        destination: "/en/terms",
        permanent: true,
      },
      {
        source: "/en/terms-and-conditions",
        destination: "/en/terms",
        permanent: true,
      },
      // privacy
      {
        source: "/es/politica-de-privacidad",
        destination: "/es/privacy",
        permanent: true,
      },
      {
        source: "/es/privacy-policy",
        destination: "/es/privacy",
        permanent: true,
      },
      {
        source: "/en/politica-de-privacidad",
        destination: "/en/privacy",
        permanent: true,
      },
      {
        source: "/en/privacy-policy",
        destination: "/en/privacy",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
