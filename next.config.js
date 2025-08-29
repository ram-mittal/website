/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "aceternity.com",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
      },
      {
        protocol: "https",
        hostname: "karthikeyanj.netlify.app",
      },
      {
        protocol: "https",
        hostname: "freetools.seobility.net",
      },
      {
        protocol: "https",
        hostname: "mfudfrexjmgxidwugcyw.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
