import fetchProgram from '@/src/api/getProgramData/utils/fetchProgram'
import { NormalizeProgramData } from '@/src/api/getProgramData/types'

export const normalizeProgramData = ({
    programsData,
}: {
    programsData: Awaited<ReturnType<typeof fetchProgram>>
}): Array<NormalizeProgramData> =>
    programsData?.map(({ attributes }) => ({
        name: attributes.name,
        typeCourse: attributes.typeCourse,
        color: attributes.color,
        durationTraining: attributes.durationTraining,
        script:
            attributes.script?.map(script => ({
                item: script?.item,
            })) || null,
        categories: attributes.categories.map(category => ({
            item: category.item,
        })),
        programs: attributes.programs.map(program => ({
            item: program.item,
        })),
        typeTraining: attributes.typeTraining.map(typeTraining => ({
            item: typeTraining.item,
        })),
        subInfoText: attributes.subInfoText.map(type => ({
            item: type.item,
        })),
        subInfoContent: attributes.subInfoContent.map(list => ({
            description: list.description,
            image: list.image.data[0].attributes.url,
        })),
        description: attributes.description,
        imageCourse: attributes.imageCourse.data[0].attributes.url,
        startDateTraining: attributes.startDateTraining,
        studyingTime: attributes.studyingTime,
        receivedDocuments: attributes.receivedDocuments,
        thisCourseFor: attributes.thisCourseFor.map(thisCourseFor => ({
            item: thisCourseFor.item,
        })),
        pathCourse: attributes.pathCourse,
        knowledgeList: attributes.knowledgeList.map(program => ({
            item: program.item,
        })),
        skillList: attributes.skillList.map(program => ({
            item: program.item,
        })),
        listOfSkills: attributes.listOfSkills.map(program => ({
            item: program.item,
        })),
        header: attributes.header,
        typeTrainingHeader: attributes.typeTrainingHeader,
        ourLicenses: attributes.ourLicenses.map(list => ({
            description: list.description,
            image: list.image.data[0].attributes.url,
        })),
        priceCourse: {
            priceRetraining: attributes.priceCourse.priceRetraining,
            discount: attributes.priceCourse.discount,
            priceQualifications: attributes.priceCourse.priceQualifications,
        },
        trainingContent: {
            syllabusRetraining: attributes.trainingContent.syllabusRetraining.map(item => ({
                header: item.header,
                description: item.description,
            })),
            syllabusQualifications: attributes.trainingContent.syllabusRetraining.map(item => ({
                header: item.header,
                description: item.description,
            })),
            listenersRetraining: attributes.trainingContent.listenersRetraining.map(item => ({
                item: item.item,
            })),
            listenersQualifications: attributes.trainingContent.listenersQualifications.map(item => ({
                item: item.item,
            })),
            admissionQualifications: attributes.trainingContent.admissionQualifications.map(item => ({
                item: item.item,
            })),
            admissionRetraining: attributes.trainingContent.admissionRetraining.map(item => ({
                item: item.item,
            })),
            IssuedDocumentsQualifications: attributes.trainingContent.IssuedDocumentsQualifications.map(item => ({
                description: item.description,
                image: item.image.data[0].attributes.url,
            })),
            IssuedDocumentsRetraining: attributes.trainingContent.IssuedDocumentsRetraining.map(item => ({
                description: item.description,
                image: item.image.data[0].attributes.url,
            })),
        },
    })) || []

export default normalizeProgramData
