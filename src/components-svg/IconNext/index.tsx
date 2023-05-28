import { SVGProps } from 'react'

const IconNext = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width='26px' height='26px' fill='none' {...props}>
        <path stroke='#000' d='M.5 13C.5 6.096 6.096.5 13 .5S25.5 6.096 25.5 13 19.904 25.5 13 25.5.5 19.904.5 13Z' />
        <g clipPath='url(#a)'>
            <path stroke='#000' strokeLinecap='round' d='m15 9-4 4 4 4' />
        </g>
        <defs>
            <clipPath id='a'>
                <path fill='#fff' d='M10 8h6v10h-6z' />
            </clipPath>
        </defs>
    </svg>
)
export default IconNext
