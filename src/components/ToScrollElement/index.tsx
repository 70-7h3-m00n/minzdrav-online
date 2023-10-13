import { ReactNode } from 'react'

interface Props {
    children: ReactNode
    idElement: string | number
}

const ToScrollElement = ({ children, idElement }: Props) => {
    const scrollToBlock = () => {
        const $elem = window.document.querySelector(`#${idElement}`)!
        $elem.scrollIntoView({
            behavior: 'smooth',
        })
    }

    return <div onClick={scrollToBlock}>{children}</div>
}

export default ToScrollElement
