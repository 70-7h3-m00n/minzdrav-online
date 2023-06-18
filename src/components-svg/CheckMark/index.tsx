import * as React from 'react'
import { SVGProps } from 'react'

const CheckMark = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' {...props}>
        <g clipPath='url(#a)'>
            <path fill='#000' fillRule='evenodd' d='M2.5 5 0 7.5 7.5 15 20 2.5 17.5 0l-10 10-5-5Z' clipRule='evenodd' />
        </g>
        <defs>
            <clipPath id='a'>
                <path fill='#fff' d='M0 0h20v15H0z' />
            </clipPath>
        </defs>
    </svg>
)

export default CheckMark
