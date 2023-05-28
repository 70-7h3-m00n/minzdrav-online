import { observer } from 'mobx-react-lite'
import useContentToggle from '@/src/features/ToggleDirection/hooks/useContentToggle'
import CourseMedicine from '@/src/features/ToggleDirection/components/CourseMedicine'
import CoursePsychology from '@/src/features/ToggleDirection/components/CoursePsychology'
import CourseDietetics from '@/src/features/ToggleDirection/components/CourseDietetics'

interface ShowInfoCoursesProps {
    data?: any
}

const ShowInfoCourses = observer(({ data }: ShowInfoCoursesProps) => {
    const { medicine, psychology, dietetics } = useContentToggle()

    return (
        <>
            <CourseMedicine />
            <CoursePsychology />
            <CourseDietetics />
        </>
    )
})

export default ShowInfoCourses
