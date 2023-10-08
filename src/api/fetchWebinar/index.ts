import qs from 'qs'
import fetcherGet from '@/src/helper/fetcher'
import { routerApi } from '@/src/config/routerApi'
import { IWebinarData } from '@/src/api/fetchWebinar/types'

export const fetchWebinar = async (locale: string, slug: string) => {
    const query = qs.stringify({
        filters: {
            slug: {
                $eq: slug,
            },
        },
        fields: [
            'description',
            'speaker',
            'startTime',
            'category',
            'header',
            'professionSpeaker',
            'subHeader',
            'descriptionWebinar',
            'availability',
            'subDescription',
            'formDescription',
        ],
        populate: {
            image: {
                fields: ['url'],
            },
            imageSpeaker: {
                fields: ['url'],
            },
            category: {
                fields: ['item'],
            },
            listInfoWebinar: {
                fields: ['item'],
            },
            listWebinarProgram: {
                fields: ['item'],
            },
            listWhichProfessions: {
                fields: ['item'],
            },
            listDuration: {
                fields: ['item'],
            },
            listTeacherCharacteristics: {
                fields: ['item'],
            },
            FAQ: {
                fields: ['header', 'description'],
            },
        },
        locale,
    })
    const res = await fetcherGet<IWebinarData>(`${routerApi.root}${routerApi.router.webinars}?${query}`)
    return res?.data[0]
}

export default fetchWebinar
