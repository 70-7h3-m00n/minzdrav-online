import qs from 'qs'
import fetcher from '@/src/helper/fetcher'
import { routerApi } from '@/src/config/routerApi'
import { IPrograms } from '@/src/api/getProgramData/types'

export const fetchProgram = async (locale: string) => {
    const query = qs.stringify({
        fields: [
            'name',
            'typeCourse',
            'color',
            'durationTraining',
            'description',
            'startDateTraining',
            'studyingTime',
            'receivedDocuments',
            'pathCourse',
            'header',
            'typeTrainingHeader',
        ],
        populate: {
            categories: {
                fields: ['item'],
            },
            programs: {
                fields: ['item'],
            },
            typeTraining: {
                fields: ['item'],
            },
            subInfoContent: {
                fields: ['description'],
                populate: {
                    image: {
                        fields: ['url'],
                    },
                },
            },
            subInfoText: {
                fields: ['item'],
            },
            imageCourse: {
                fields: ['url'],
            },
            thisCourseFor: {
                fields: ['item'],
            },
            knowledgeList: {
                fields: ['item'],
            },
            skillList: {
                fields: ['item'],
            },
            listOfSkills: {
                fields: ['item'],
            },
            ourLicenses: {
                fields: ['description'],
                populate: {
                    image: {
                        fields: ['url'],
                    },
                },
            },
            priceCourse: {
                fields: ['price', 'discount', 'installmentPlan'],
            },
        },
        locale,
    })

    const res = await fetcher<IPrograms>(`${routerApi.root}${routerApi.router.programs}?${query}`)

    return res?.data || []
}

export default fetchProgram
