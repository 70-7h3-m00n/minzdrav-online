import fetchPartner from '@/src/api/getPartnerData/utils/fetchPartner'

export const normalizePartnersData = ({ partnerData }: { partnerData: Awaited<ReturnType<typeof fetchPartner>> }) =>
    partnerData?.map(({ attributes }) => ({
        partner: attributes?.partner,
        iconUrl: attributes?.logo?.data?.[0]?.attributes?.url,
    })) || null

export default normalizePartnersData
