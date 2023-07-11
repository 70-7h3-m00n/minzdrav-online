import React, { useState } from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'next-i18next'
import AccordionSyllabus from '@/src/features/TabCourseInfo/components/AccordionSyllabus'
import CardListeners from '@/src/features/TabCourseInfo/components/CardListeners'
import CardAdmission from '@/src/features/TabCourseInfo/components/CardAdmission'
import classNames from 'classnames'
import IssuedDocuments from '@/src/features/TabCourseInfo/components/IssuedDocuments'

interface TabInfoProps {
    data: {
        syllabus: Array<{ header: string; description: string }>
        listeners: Array<{ item: string }>
        admission: Array<{ item: string }>
        issuedDocuments: Array<{ description: string; image: Array<{ url: string }> }>
    }
}

const TabInfo = ({ data }: TabInfoProps): JSX.Element => {
    const { t } = useTranslation()
    const [tabActive, setTabActive] = useState(0)

    const infoTabs = [
        t('TabsCourseInfo:syllabus'),
        t('TabsCourseInfo:requirements'),
        t('TabsCourseInfo:admission'),
        t('TabsCourseInfo:Issued'),
    ]

    return (
        <div>
            <div className={styles.wrapperBtnTab}>
                {infoTabs.map((tab, index) => (
                    <div
                        className={index === tabActive ? styles.active : styles.tabBtn}
                        key={tab + index}
                        onClick={() => setTabActive(index)}
                    >
                        {tab}
                    </div>
                ))}
            </div>

            <div className={classNames(tabActive === 0 ? '' : 'close', styles.wrapperBlock)}>
                {data.syllabus.map((content, index) => (
                    <AccordionSyllabus key={content.header + index} data={content} indexModule={index + 1} />
                ))}
            </div>

            <div className={classNames(tabActive === 1 ? '' : 'close', styles.wrapperBlock)}>
                {data.listeners.map((content, index) => (
                    <CardListeners key={content.item + index} data={content} />
                ))}
            </div>

            <div className={classNames(tabActive === 2 ? '' : 'close', styles.wrapperAdmission)}>
                {data.admission.map((content, index) => (
                    <CardAdmission key={content.item + index} data={content} index={index + 1} />
                ))}
            </div>

            <div className={classNames(tabActive === 3 ? '' : 'close', styles.wrapperBlock)}>
                {data.issuedDocuments.map((content, index) => (
                    <IssuedDocuments key={content.description + index} data={content} revers={index % 2 !== 0} />
                ))}
            </div>
        </div>
    )
}

export default TabInfo
