import styles from './styles.module.scss'
import { useEffect } from 'react'

interface ModalProps {
    open: boolean
    setHidden(open: boolean): void
    children?: JSX.Element
}

const Modal = ({ open, setHidden, children }: ModalProps): JSX.Element => {
    useEffect(() => {
        let scrollbar = window.innerWidth - document.documentElement.clientWidth
        if (open) {
            document.body.style.overflow = 'hidden'
            document.body.style.paddingRight = `${scrollbar}px`
        } else {
            document.body.style.overflow = 'unset'
            document.body.style.paddingRight = '0px'
        }
    }, [open])

    return (
        <div className={open ? styles.modal : 'close'} onClick={() => setHidden(false)}>
            <div onClick={e => e.stopPropagation()}>{children}</div>
        </div>
    )
}

export default Modal
