/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimantal: {
    appDir: true,
  },
  images: {
    domains: ["static.vecteezy.com", "upload.wikimedia.org"],
  },
};

export default nextConfig;
