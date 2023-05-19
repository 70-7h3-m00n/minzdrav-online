import normalizeResourcesData from '@/src/api/getArticlesData/utils/normalizeResourcesData'
import fetchResources from '@/src/api/getArticlesData/utils/fetchResources'

export const getResourcesData = async (locale: string) => {
    const articlesData = await fetchResources(locale)

    return normalizeResourcesData({ articlesData })
}

export default getResourcesData
