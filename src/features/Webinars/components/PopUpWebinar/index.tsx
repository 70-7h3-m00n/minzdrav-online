import BgFon from '@/public/images/popUpBg.png'
import Image from 'next/image'
import styles from './styles.module.scss'
import Modal from '@/src/components/Modal/index'
import {useState} from "react";
import FormWebinar from "@/src/features/Webinars/components/FormWebinar";

const PopUpWebinar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className={styles.block}>
            <div className={styles.contentWrapper}>
                <h3 className={styles.header}>{'Только полезная информация'}</h3>

                <p className={styles.description}>
                    За 2 часа вебинара вы получите много практических знаний, который сможете сразу же начать применять
                </p>

                <button className={styles.btn} onClick={() => setOpen(true)}>Получить новые навыки</button>
            </div>
            <Image src={BgFon} alt={'bg'} className={styles.bgImage} />

            <Modal open={open} setHidden={setOpen}>
                <div className={styles.wrapperForm}>
                    <FormWebinar />
                </div>
            </Modal>
        </div>
    )
}

export default PopUpWebinar
