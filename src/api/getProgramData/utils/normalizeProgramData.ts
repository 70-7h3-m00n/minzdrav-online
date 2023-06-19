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
            price: attributes.priceCourse.price,
            discount: attributes.priceCourse.discount,
            installmentPlan: attributes.priceCourse.installmentPlan,
        },
    })) || []

export default normalizeProgramData
