/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',              // ⟵ generates ./out on build
  images: {
    unoptimized: true,           // ⟵ required for static export
    remotePatterns: [],
  },
};

export default nextConfig;
