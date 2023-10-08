import { useState } from 'react'
import styles from './styles.module.scss'
import SvgComponent from '@/src/components-svg/ArrowAccordion'

interface Props {
    header: string
    description: string
    colorFragment: string
}

const AccordionWebinar = ({ header, description, colorFragment }: Props) => {
    const [open, setOpen] = useState(false)

    return (
        <div className={styles.block}>
            <div className={styles.headerBlock} onClick={() => setOpen(!open)}>
                <div className={styles.fragment} style={{backgroundColor: colorFragment}} />

                <p className={styles.headerText}>{header}</p>

                <div className={styles.wrapperToggle}>
                    <div>Подробнее</div>

                    <SvgComponent />
                </div>
            </div>

            <div className={!open ? 'close' : styles.description} dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    )
}

export default AccordionWebinar
