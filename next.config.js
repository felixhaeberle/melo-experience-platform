module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://melo-experience-platform.netlify.app/:path*',
      },
    ]
  },
}