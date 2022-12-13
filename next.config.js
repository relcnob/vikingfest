/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    protocol: "http",
    domains: ["localhost", "placeimg.com"],
    port: "8080",
    pathname: "/logos/**",
  },
};

module.exports = nextConfig;
