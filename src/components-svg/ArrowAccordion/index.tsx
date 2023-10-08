import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width='14px' height='14px' fill='none' {...props}>
        <g clipPath='url(#a)'>
            <path fill='#000' d='M14 .562h-2.469v9.223L1.746 0 0 1.746l9.785 9.785H.562V14L14 13.997V.562Z' />
        </g>
        <defs>
            <clipPath id='a'>
                <path fill='#fff' d='M0 0h14v14H0z' />
            </clipPath>
        </defs>
    </svg>
)
export default SvgComponent
