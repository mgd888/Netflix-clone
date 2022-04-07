const { config } = require('process');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        // Unset client-side javascript that only works server-side
        config.resolve.fallback = {
            fs: false,
            module: false,
            path: false,
            process: false,
            os: false,
            util: false,
            buffer: false,
            querystring: false,
        };
        return config;
    },
    images: { domains: ['upload.wikimedia.org'] },
};

module.exports = nextConfig;
