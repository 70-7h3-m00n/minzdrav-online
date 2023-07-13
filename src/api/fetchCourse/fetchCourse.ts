import qs from 'qs'
import fetcherGet from '@/src/helper/fetcher'
import { routerApi } from '@/src/config/routerApi'
import { ICourseData } from '@/src/api/fetchCourse/types'

export const fetchCourse = async (locale: string, slug: string) => {
    const query = qs.stringify({
        filters: {
            pathCourse: {
                $eq: slug,
            },
        },
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
            speakers: {
                fields: ['name, description'],
                populate: {
                    image: {
                        fields: ['url'],
                    },
                },
            },
            script: {
                fields: ['item'],
            },
            courseSeo: {
                fields: ['title', 'description'],
            },
            categories: {
                fields: ['item'],
            },
            typeTraining: {
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
                fields: ['priceRetraining', 'discount', 'priceQualifications'],
            },
            trainingContent: {
                populate: {
                    syllabusRetraining: {
                        fields: ['header', 'description'],
                    },
                    syllabusQualifications: {
                        fields: ['header', 'description'],
                    },
                    listenersRetraining: {
                        fields: ['item'],
                    },
                    listenersQualifications: {
                        fields: ['item'],
                    },
                    admissionQualifications: {
                        fields: ['item'],
                    },
                    admissionRetraining: {
                        fields: ['item'],
                    },
                    IssuedDocumentsQualifications: {
                        fields: ['description'],
                        populate: {
                            image: {
                                fields: ['url'],
                            },
                        },
                    },
                    IssuedDocumentsRetraining: {
                        fields: ['description'],
                        populate: {
                            image: {
                                fields: ['url'],
                            },
                        },
                    },
                },
            },
        },
        locale,
    })
    const res = await fetcherGet<ICourseData>(`${routerApi.root}${routerApi.router.programs}?${query}`)

    return res?.data[0]
}

export default fetchCourse
