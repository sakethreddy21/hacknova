/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.freepik.com', 'www.freepik.com']
    
  },

  async rewrites() {
    return [
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },
}

module.exports = nextConfig
