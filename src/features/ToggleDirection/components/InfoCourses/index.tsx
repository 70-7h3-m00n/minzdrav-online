import CourseMedicine from '@/src/features/ToggleDirection/components/CourseMedicine'
import CourseContent from '@/src/features/ToggleDirection/components/CourseContent'
import dieteticsImg from '@/public/images/DieteticsCard.png'
import psychologyImg from '@/public/images/PsychologyCard.png'
import { useTranslation } from 'next-i18next'

const ShowInfoCourses = () => {
    const { t } = useTranslation()

    return (
        <>
            <CourseMedicine />
            <CourseContent
                color={'#A93BFF'}
                type={'Психология'}
                header={t('common:psychology')}
                image={psychologyImg}
            />
            <CourseContent color={'#FF5E3B'} type={'Диетология'} header={t('common:dietetics')} image={dieteticsImg} />
        </>
    )
}

export default ShowInfoCourses
