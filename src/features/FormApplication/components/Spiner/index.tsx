import styles from './styles.module.scss'

interface SpinerProps {
    isLoading: boolean
}

const Spiner = ({ isLoading }: SpinerProps): JSX.Element => {
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

export default Spiner
