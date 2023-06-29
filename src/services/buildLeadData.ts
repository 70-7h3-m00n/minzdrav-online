import { v4 as uuidv4 } from 'uuid'
import { format } from 'date-fns'
import { buildUserLocation } from './buildUserLocation'

type TypeReferer = string | null

export type TypeUtms = {
    readonly utm_source?: string
    readonly utm_medium?: string
    readonly utm_campaign?: string
    readonly utm_content?: string
    readonly utm_term?: string
}

type TypeFormAlphaValues = {
    readonly name?: string
    readonly phone: string
    readonly email?: string
}

type TypeLeadClientValues = Awaited<TypeFormAlphaValues> & {
    readonly id: string
    readonly programTitle?: string
    readonly leadPage: string
    readonly currentFacultySlug: string
    readonly currentProgramSlug: string
    readonly utms: TypeUtms
    readonly referer: TypeReferer
}

type TypeBuildLeadDataProps = Awaited<TypeLeadClientValues> & {
    rootPath: string
    ip: string
    location: Awaited<ReturnType<typeof buildUserLocation>>
}

export const buildLeadData = async ({
    name,
    phone,
    email,
    id,
    programTitle,
    leadPage,
    currentFacultySlug,
    currentProgramSlug,
    utms,
    referer,
    rootPath,
    ip,
    location,
}: TypeBuildLeadDataProps) => {
    const now = new Date()

    const output = {
        id: id || uuidv4(),
        date: format(now, 'dd-MM-yyyy'),
        time: format(now, 'HH:mm:ss'),
        utc: format(now, 'z'),
        name: name || null,
        phone: phone || null,
        email: email || null,
        vk: null,
        promocode: null,
        contactWay: null,
        contactMethod: null,
        question: null,
        rootPath: rootPath || null,
        leadPage: leadPage || null,
        ip: ip || null,
        // cityEn: location?.city.names.en || null,
        cityEn: null,
        // cityRu: location?.city.names.ru || null,
        cityRu: null,
        // countryCode: location?.country.code || null,
        countryCode: null,
        // countryEn: location?.country.names.en || null,
        countryEn: null,
        // countryRu: location?.country.names.ru || null,
        countryRu: null,
        // continentCode: location?.continent.code || null,
        continentCode: null,
        // continentEn: location?.continent.names.en || null,
        continentEn: null,
        // continentRu: location?.continent.names.ru || null,
        continentRu: null,
        // accuracyRadius: location?.coordinates.accuracyRadius || null,
        accuracyRadius: null,
        // latitude: location?.coordinates.latitude || null,
        latitude: null,
        // longitude: location?.coordinates.longitude || null,
        longitude: null,
        // timeZone: location?.timeZone || null,
        timeZone: null,
        // postalCode: location?.postalCode || null,
        postalCode: null,
        programTitle: currentProgramSlug?.toString() || null,
        utmSource: (utms && utms.utm_source) || referer || null,
        utmMedium: (utms && utms.utm_medium) || null,
        utmCampaign: (utms && utms.utm_campaign) || null,
        utmContent: (utms && utms.utm_content) || null,
        utmTerm: (utms && utms.utm_term) || null,
    }

    return output
}

export default buildLeadData
