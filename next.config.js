/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "./out",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images-assets.nasa.gov",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
