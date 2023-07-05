import fetchProgram from '@/src/api/getProgramData/utils/fetchProgram'
import normalizeProgramData from '@/src/api/getProgramData/utils/normalizeProgramData'
import { NormalizeProgramData } from '@/src/api/getProgramData/types'

export const getProgramData = async (locale: string): Promise<NormalizeProgramData[]> => {
    const programsData = await fetchProgram(locale)

    return normalizeProgramData({ programsData })
}

export default getProgramData
