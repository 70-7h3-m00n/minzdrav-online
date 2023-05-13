import fs from 'fs'
import path from 'path'

const getFilesName = (pathDirectory: string, fulName: boolean = false): string[] => {
    const filesPath = path.join(process.cwd(), pathDirectory)
    const fileNames = fs.readdirSync(filesPath)

    if (fulName) {
        return fileNames
    } else {
        const fileExtensions = ['.json', '.js', '.html', '.css']

        return fileNames.map(file => {
            return fileExtensions.reduce((prev, ext) => {
                return file.endsWith(ext) ? file.replace(ext, '') : prev
            }, file)
        })
    }
}

export default getFilesName
