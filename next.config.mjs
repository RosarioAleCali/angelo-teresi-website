/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_PLACES_API_KEY: process.env.GOOGLE_PLACES_API_KEY,
    PLACE_ID: process.env.PLACE_ID,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
