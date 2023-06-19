import { observer } from 'mobx-react-lite'
import CourseMedicine from '@/src/features/ToggleDirection/components/CourseMedicine'
import CoursePsychology from '@/src/features/ToggleDirection/components/CoursePsychology'
import CourseDietetics from '@/src/features/ToggleDirection/components/CourseDietetics'
import getPartnersData from '@/src/api/getProgramData'

interface ShowInfoCoursesProps {
    data: Awaited<ReturnType<typeof getPartnersData>>
}

const ShowInfoCourses = ({ data }: ShowInfoCoursesProps) => {
    const dataMedicine = data.filter(course => course.typeCourse === 'Медицина')
    const dataPsychology = data.filter(course => course.typeCourse === 'Психология')
    const dataDietetics = data.filter(course => course.typeCourse === 'Диетология')

    return (
        <>
            <CourseMedicine dataMedicine={dataMedicine} />
            <CoursePsychology dataPsychology={dataPsychology} />
            <CourseDietetics dataDietetics={dataDietetics} />
        </>
    )
}

export default observer(ShowInfoCourses)
