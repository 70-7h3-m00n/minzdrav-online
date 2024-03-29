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
        SMTP_PASS: 'F>sH/2:,*~?[',
        SMTP_FROM: 'lead@smtp.minzdrav.online',
        SMTP_LOGIN: 'lead@smtp.minzdrav.online',
        roistatKey: 'OTU1ZDc0NjZlN2M3NDkyYzg4ZDdhMWU5MDQ5Y2ZhYzM6MjMyMTk1',
        yandexMapsKey: 'ea5a06b6-9cea-47c4-9bda-bcbfb8b49e1d',
    },
}

module.exports = nextConfig
