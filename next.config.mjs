/** @type {import('next').NextConfig} */
const nextConfig = {
  //   output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.image.tmdb.org',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.tmdb.org',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.themoviedb.org',
        port: '',
      },
    ],
    // remotePatterns: ['tmdb.org', 'themoviedb.org', 'image.tmdb.org'],
  },
};

export default nextConfig;
