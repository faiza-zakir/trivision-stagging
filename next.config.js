const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apitrivsion.prismcloudhosting.com",
      },
      {
        protocol: "https",
        hostname: "trivision-images.s3.amazonaws.com",
      },
    ],
    domains: [
      "apitrivsion.prismcloudhosting.com",
      "trivision-images.s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
