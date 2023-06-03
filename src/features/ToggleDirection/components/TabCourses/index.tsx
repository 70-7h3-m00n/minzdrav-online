import { arrayTabs } from '@/src/features/ToggleDirection/data/tabInfo'
import styles from './styles.module.scss'
import uuid from 'react-uuid'
import { observer } from 'mobx-react-lite'
import useContentToggle from '@/src/features/ToggleDirection/hooks/useContentToggle'
import { EnumContentToggle } from '@/src/features/ToggleDirection/store/ToggleContent'
import classNames from 'classnames'
import Image from 'next/image'

const TabCourses = observer(() => {
    const { toggle, medicine, psychology, dietetics } = useContentToggle()

    const onSearchValid = (type: EnumContentToggle) => {
        const validData: Record<EnumContentToggle, boolean> = {
            [EnumContentToggle.psychology]: psychology,
            [EnumContentToggle.dietetics]: dietetics,
            [EnumContentToggle.medicine]: medicine,
        }
        return type in validData ? validData[type] : null
    }

    return (
        <div>
            {arrayTabs
                .filter(item => !onSearchValid(item.toggle))
                .map((item, i) => (
                    <div
                        key={uuid()}
                        className={classNames(styles.medicine)}
                        style={{
                            background: item.color,
                            flexDirection: i % 2 ? 'row-reverse' : 'row',
                        }}
                    >
                        <div className={styles.contentWrapper}>
                            <h3 className={styles.header}>{item.header}</h3>

                            <button className={styles.btn} onClick={() => toggle(item.toggle)}>
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
        </div>
    )
})

export default TabCourses
