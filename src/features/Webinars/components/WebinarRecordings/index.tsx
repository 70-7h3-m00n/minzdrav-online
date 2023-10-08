import React from 'react'
import { Webinar } from '@/src/api/fetchWebinars/types'

interface Props {
    data: Array<Webinar> | undefined
}

const WebinarRecordings = ({ data }: Props) => {
    return (
        <div>
            <h2 className={'header'}>Записи вебинаров</h2>
        </div>
    )
}

export default WebinarRecordings
