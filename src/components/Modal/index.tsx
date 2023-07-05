import styles from './styles.module.scss'
import { useEffect } from 'react'

interface ModalProps {
    open: boolean
    setHidden(open: boolean): void
    children?: JSX.Element
}

const Modal = ({ open, setHidden, children }: ModalProps): JSX.Element => {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [open])

    return (
        <div className={open ? styles.modal : 'close'} onClick={() => setHidden(false)}>
            <div onClick={e => e.stopPropagation()}>{children}</div>
        </div>
    )
}

export default Modal
