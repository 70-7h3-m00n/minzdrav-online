import * as React from 'react'
import { SVGProps } from 'react'

const SvgClose = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width='30px' height='30px' fill='none' {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M1.06 22.153a1.5 1.5 0 0 1 0-2.122L20.154.94a1.5 1.5 0 0 1 2.12 2.122L3.183 22.153a1.5 1.5 0 0 1-2.121 0Z'
            clipRule='evenodd'
        />
        <path
            fill='#000'
            fillRule='evenodd'
            d='M1.06.94a1.5 1.5 0 0 1 2.122 0L22.274 20.03a1.5 1.5 0 1 1-2.122 2.122L1.06 3.06a1.5 1.5 0 0 1 0-2.122Z'
            clipRule='evenodd'
        />
    </svg>
)
export default SvgClose
