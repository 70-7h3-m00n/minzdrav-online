import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'next-i18next'
import TabInfo from '@/src/features/TabCourseInfo/components/TabInfo'
import classNames from 'classnames'
import { Course } from '@/src/api/fetchCourse/types'

interface TabCourseInfoProps {
    course: Course
}

interface TadData {
    training: string
    data: {
        syllabus: Array<{ header: string; description: string }>
        listeners: Array<{ item: string }>
        admission: Array<{ item: string }>
        issuedDocuments: Array<{ description: string; image: Array<{ url: string }> }>
    }
}

const trainingType = {
    qualifications: 'training',
    retraining: 'professionalRetraining',
}

const TabCourseInfo = ({ course }: TabCourseInfoProps): JSX.Element => {
    const { t } = useTranslation()
    const [tabActive, setTabActive] = useState(0)

    const tadData = [
        ...new Set(
            course.typeTraining.reduce((accumulator: TadData[], currentValue) => {
                if (trainingType.qualifications === currentValue.item) {
                    return accumulator.concat({
                        training: currentValue.item,
                        data: {
                            syllabus: course.trainingContent.syllabusQualifications,
                            listeners: course.trainingContent.listenersQualifications,
                            admission: course.trainingContent.admissionQualifications,
                            issuedDocuments: course.trainingContent.IssuedDocumentsQualifications,
                        },
                    })
                } else if (trainingType.retraining === currentValue.item) {
                    return accumulator.concat({
                        training: currentValue.item,
                        data: {
                            syllabus: course.trainingContent.syllabusRetraining,
                            listeners: course.trainingContent.listenersRetraining,
                            admission: course.trainingContent.admissionRetraining,
                            issuedDocuments: course.trainingContent.IssuedDocumentsRetraining,
                        },
                    })
                }
                return accumulator
            }, []),
        ),
    ]

    return (
        <div className={styles.container}>
            <div className={styles.tabWrapper}>
                {tadData.map((tab, index) => (
                    <div
                        key={index}
                        className={classNames([
                            styles.tab,
                            tadData.length === 1 && styles.tabFull,
                            index !== tabActive && styles.hoverTab,
                        ])}
                        style={{
                            backgroundColor: index === tabActive ? course.color : 'transparent',
                            border: index === tabActive ? `1px solid ${course.color}` : '1px solid #000000',
                            color: index === tabActive ? 'white' : 'black',
                            cursor: index === tabActive ? 'auto' : 'pointer',
                        }}
                        onClick={() => setTabActive(index)}
                    >
                        {t(`common:${tab.training}`)}
                    </div>
                ))}
            </div>

            <div>
                {tadData.map((tab, index) => (
                    <div key={tab.training + index} className={tabActive !== index ? 'close' : ''}>
                        <TabInfo data={tab.data} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TabCourseInfo
