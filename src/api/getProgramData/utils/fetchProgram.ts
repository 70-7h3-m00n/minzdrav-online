import qs from 'qs'
import fetcher from '@/src/helper/fetcher'
import { routerBack } from '@/src/config/routerBack'
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
            'script',
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

    const res = await fetcher<IPrograms>(`${routerBack.root}${routerBack.router.programs}?${query}`)

    return res?.data || []
}

export default fetchProgram
