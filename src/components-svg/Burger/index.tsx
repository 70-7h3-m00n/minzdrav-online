import * as React from 'react'
import { SVGProps } from 'react'
const SvgBurger = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width='30px' height='30px' fill='none' {...props}>
        <path stroke='#000' strokeLinecap='round' strokeWidth={3} d='M1.5 1.5h27M1.5 12.5h27M1.5 23.5h27' />
    </svg>
)
export default SvgBurger
