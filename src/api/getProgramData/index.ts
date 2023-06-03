import fetchProgram from '@/src/api/getProgramData/utils/fetchProgram'
import normalizeProgramData from '@/src/api/getProgramData/utils/normalizeProgramData'

export const getPartnersData = async (locale: string) => {
    const programsData = await fetchProgram(locale)

    return normalizeProgramData({ programsData })
}

export default getPartnersData
