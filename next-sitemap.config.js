module.exports = {
    siteUrl: 'https://minzdrav.online',
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    generateRobotsTxt: true,
    generateIndexSitemap: true,
    exclude: ['/server-sitemap-index.xml'],
    alternateRefs: [
        {
            href: 'https://minzdrav.online',
            hreflang: 'en',
        },
        {
            href: 'https://minzdrav.online',
            hreflang: 'kk',
        },
        {
            href: 'https://minzdrav.online',
            hreflang: 'uz',
        },
    ],
    transform: async (config, path) => {
        return {
            loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? [],
        }
    },
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
}
