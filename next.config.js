const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GENERATE_SOURCEMAP: process.env.GENERATE_SOURCEMAP,
    LANGUAGE: process.env.LANGUAGE,
    LANGUAGE_TYPE_NAME: process.env.LANGUAGE_TYPE_NAME,
    TOKEN: process.env.TOKEN,
    API_DOMAIN: process.env.API_DOMAIN,
    ENV: process.env.ENV,
  },
}

module.exports = nextConfig