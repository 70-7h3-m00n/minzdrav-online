import fetchResources from '@/src/api/getArticlesData/utils/fetchResources'

export const normalizeResourcesData = ({
    articlesData,
}: {
    articlesData: Awaited<ReturnType<typeof fetchResources>>
}) =>
    articlesData?.map(({ attributes }) => ({
        text: attributes?.description,
        iconUrl: attributes?.icon?.data?.[0]?.attributes?.url,
    })) || null

export default normalizeResourcesData
