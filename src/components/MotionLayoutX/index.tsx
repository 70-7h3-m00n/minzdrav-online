import React from 'react'
import { motion } from 'framer-motion'

interface MotionLayoutXProps {
    children: JSX.Element
    variant: 'left' | 'right'
}

const MotionLayoutX = ({ children, variant }: MotionLayoutXProps) => {
    const translateLeft = {
        hidden: {
            x: variant === 'left' ? -200 : 200,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.5,
            },
        },
    }

    return (
        <motion.div
            variants={translateLeft}
            initial={'hidden'}
            whileInView={'visible'}
            viewport={{
                once: true,
            }}
            layout
        >
            {children}
        </motion.div>
    )
}

export default MotionLayoutX
