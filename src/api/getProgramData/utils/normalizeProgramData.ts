import fetchProgram from '@/src/api/getProgramData/utils/fetchProgram'
import { NormalizeProgramData } from '@/src/api/getProgramData/types'

export const normalizeProgramData = ({
    programsData,
}: {
    programsData: Awaited<ReturnType<typeof fetchProgram>>
}): Array<NormalizeProgramData> =>
    programsData?.map(({ attributes }) => ({
        name: attributes.name,
        slug: attributes.slug,
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
    })) || []

export default normalizeProgramData
