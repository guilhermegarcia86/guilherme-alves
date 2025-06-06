/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');

// Você pode colocar outras configs do Next se precisar
const nextConfig = {
  // ... (ex: images, reactStrictMode, etc.)
};

module.exports = withContentlayer(nextConfig);

