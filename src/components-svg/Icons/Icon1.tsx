import * as React from 'react'
import { SVGProps } from 'react'

const Icon1 = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' {...props}>
        <mask
            id='a'
            width={38}
            height={38}
            x={0}
            y={0}
            maskUnits='userSpaceOnUse'
            style={{
                maskType: 'alpha',
            }}
        >
            <path fill='#D9D9D9' d='M0 0h38v38H0z' />
        </mask>
        <g mask='url(#a)'>
            <path
                fill={props.fill}
                d='M22.663 26.646c.374.374.85.561 1.429.561.578 0 1.055-.187 1.429-.561.374-.375.561-.85.561-1.43 0-.578-.187-1.054-.561-1.428l-5.104-5.105v-7.35c0-.578-.196-1.063-.586-1.455-.392-.391-.878-.586-1.456-.586s-1.063.195-1.454.586c-.392.392-.588.877-.588 1.455v7.3a4.023 4.023 0 0 0 1.174 2.858l5.155 5.155Zm-4.288 11.229c-2.552 0-4.943-.485-7.172-1.454-2.229-.97-4.167-2.28-5.817-3.932-1.651-1.65-2.961-3.59-3.93-5.819C.486 24.442 0 22.052 0 19.5c0-2.552.485-4.943 1.456-7.172.969-2.228 2.279-4.168 3.93-5.82 1.65-1.649 3.588-2.959 5.817-3.93 2.23-.968 4.62-1.453 7.172-1.453 2.552 0 4.942.485 7.17 1.454 2.23.97 4.17 2.28 5.821 3.93 1.65 1.65 2.96 3.59 3.93 5.819.97 2.23 1.454 4.62 1.454 7.172 0 2.552-.485 4.942-1.454 7.17-.97 2.23-2.28 4.17-3.93 5.82-1.65 1.65-3.591 2.96-5.82 3.931-2.229.97-4.619 1.454-7.171 1.454Zm0-4.083c3.981 0 7.359-1.387 10.133-4.161 2.772-2.773 4.159-6.15 4.159-10.131s-1.387-7.359-4.16-10.133c-2.773-2.772-6.15-4.159-10.132-4.159-3.981 0-7.359 1.387-10.133 4.16C5.47 12.14 4.083 15.517 4.083 19.5c0 3.981 1.387 7.358 4.16 10.13 2.773 2.775 6.15 4.162 10.132 4.162Z'
            />
        </g>
    </svg>
)
export default Icon1
