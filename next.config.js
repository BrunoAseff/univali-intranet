const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["http://localhost:3000", "localhost:3000"],
    },
  },
};

module.exports = nextConfig;
