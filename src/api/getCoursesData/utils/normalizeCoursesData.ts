import fetchCourses from '@/src/api/getCoursesData/utils/fetchCourses'
import { NormalizeCoursesData } from '@/src/api/getCoursesData/types'

export const normalizeCoursesData = ({
    coursesData,
}: {
    coursesData: Awaited<ReturnType<typeof fetchCourses>>
}): Array<NormalizeCoursesData> =>
    coursesData?.map(({ attributes }) => ({
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
        pathCourse: attributes.pathCourse,
    })) || []

export default normalizeCoursesData
