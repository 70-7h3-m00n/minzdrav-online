const fs = require('fs')
const path = require('path')

function getLocalesFromDir(dirName) {
    const locales = []
    fs.readdirSync(dirName).forEach(file => {
        const filePath = path.join(dirName, file)
        const stat = fs.statSync(filePath)
        if (stat.isDirectory()) {
            locales.push(file)
        }
    })

    return locales
}

module.exports = {
    i18n: {
        defaultLocale: 'ru',
        locales: getLocalesFromDir('./public/locales'),
    },
    reloadOnPrerender: true,
}
