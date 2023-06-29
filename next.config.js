/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
    reactStrictMode: true,
    basePath: '',
    i18n,
    images: {
        domains: ['res.cloudinary.com'],
    },
    env: {
        previewSecret: 'q4Bp6fgMJMIx9PdyVs12kQ',
        SMTP_PASS: '^ge47cvp`xLd',
    },
}

module.exports = nextConfig
