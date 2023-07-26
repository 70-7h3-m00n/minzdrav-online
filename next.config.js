/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
    reactStrictMode: true,
    basePath: '',
    poweredByHeader: false,
    i18n,
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['res.cloudinary.com'],
    },
    env: {
        previewSecret: 'q4Bp6fgMJMIx9PdyVs12kQ',
        SMTP_PASS: '^ge47cvp`xLd',
        roistatKey: 'OTU1ZDc0NjZlN2M3NDkyYzg4ZDdhMWU5MDQ5Y2ZhYzM6MjMyMTk1',
    },
}

module.exports = nextConfig
