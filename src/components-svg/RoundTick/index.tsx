import { SVGProps } from 'react'

const RoundTick = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width='26px' height='26px' fill='none' {...props}>
        <g fill='#A93BFF' clipPath='url(#a)'>
            <path d='m11.42 18.276-4.787-4.79 1.595-1.595 3.193 3.191 6.383-6.384 1.596 1.597-7.98 7.978v.003Z' />
            <path
                fillRule='evenodd'
                d='M.992 13.406C.992 6.551 6.55.993 13.405.993c6.856 0 12.414 5.558 12.414 12.413 0 6.856-5.558 12.414-12.414 12.414C6.55 25.82.992 20.262.992 13.406Zm12.413 10.157a10.156 10.156 0 1 1 0-20.313 10.156 10.156 0 0 1 0 20.313Z'
                clipRule='evenodd'
            />
        </g>
        <defs>
            <clipPath id='a'>
                <path fill='#fff' d='M0 0h26v26H0z' />
            </clipPath>
        </defs>
    </svg>
)
export default RoundTick
