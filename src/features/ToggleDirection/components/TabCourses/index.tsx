import { observer } from 'mobx-react-lite'
import { arrayTabs } from '@/src/features/ToggleDirection/data/tabInfo'
import styles from './styles.module.scss'
import useContentToggle from '@/src/features/ToggleDirection/hooks/useContentToggle'
import { EnumContentToggle } from '@/src/features/ToggleDirection/store/ToggleContent'
import classNames from 'classnames'
import Image from 'next/image'
import MotionLayoutX from '@/src/components/MotionLayoutX'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { getQueryToggle } from '@/src/features/ToggleDirection/data/dataQuery'
import { useEffect } from 'react'
import getQueryData from '@/src/features/ToggleDirection/utils/getQueryData'
import getFilterActions from '@/src/features/ToggleDirection/utils/getFilterActions'

const TabCourses = observer(() => {
    const { t } = useTranslation()
    const { toggle, medicine, psychology, dietetics } = useContentToggle()
    const { replace, pathname, query } = useRouter()
    const queryParams = getQueryData()
    const { setDirection } = getFilterActions()

    const onSearchValid = (type: EnumContentToggle) => {
        const validData: Record<EnumContentToggle, boolean> = {
            [EnumContentToggle.psychology]: psychology,
            [EnumContentToggle.dietetics]: dietetics,
            [EnumContentToggle.medicine]: medicine,
        }
        return type in validData ? validData[type] : null
    }

    const setData = (type: EnumContentToggle) => {
        getQueryToggle.forEach(item => {
            if (item.query !== query.direction) {
                replace(pathname, {
                    query: {
                        ...queryParams,
                        direction: type,
                    },
                })
            }
        })

        setDirection(type)
        toggle(type)
    }

    useEffect(() => {
        if (query.direction !== undefined) {
            getQueryToggle.forEach(item => {
                if (item.query === query.direction) {
                    toggle(item.toggle)
                    setDirection(query.direction)
                }
            })
        }
    }, [query])

    return (
        <>
            <MotionLayoutX variant={'right'}>
                <>
                    {arrayTabs
                        .filter(item => !onSearchValid(item.toggle))
                        .map((item, i) => (
                            <div
                                key={i}
                                className={classNames(styles.medicine)}
                                style={{
                                    background: item.color,
                                    flexDirection: i % 2 ? 'row-reverse' : 'row',
                                }}
                            >
                                <div className={styles.contentWrapper}>
                                    <h3 className={styles.header}>{t(`common:${item.header}`)}</h3>

                                    <button className={styles.btn} onClick={() => setData(item.toggle)}>
                                        Ознакомиться с программами
                                    </button>
                                </div>

                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={item.image}
                                        alt={'alt'}
                                        fill
                                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                        priority
                                    />
                                </div>
                            </div>
                        ))}
                </>
            </MotionLayoutX>
        </>
    )
})

export default TabCourses
