module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.jsdelivr.net','localhost'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    return config
  },
}