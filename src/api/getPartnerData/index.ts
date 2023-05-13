import fetchPartner from '@/src/api/getPartnerData/utils/fetchPartner'
import normalizePartnersData from '@/src/api/getPartnerData/utils/normalizePartnerData'

export const getPartnersData = async (locale: string) => {
    const partnerData = await fetchPartner(locale)

    return normalizePartnersData({ partnerData })
}

export default getPartnersData
