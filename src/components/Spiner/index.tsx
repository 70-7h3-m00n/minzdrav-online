import { observer } from 'mobx-react-lite'
import styles from './styles.module.scss'
import { IOpenModalStore, openModalStore } from '@/src/features/FormApplication/store/OpenModal'

const Spiner = (): JSX.Element => {
    const { isLoading }: IOpenModalStore = openModalStore

    const elem = (): JSX.Element => {
        let i = 0
        let ldio = <></>
        while (i < 12) {
            ldio = (
                <>
                    {ldio} <div />
                </>
            )
            i++
        }
        return ldio
    }

    return (
        <div className={isLoading ? styles.spinnerSpinner : 'close'}>
            <div className={styles.ldio}>{elem()}</div>
        </div>
    )
}

export default observer(Spiner)
