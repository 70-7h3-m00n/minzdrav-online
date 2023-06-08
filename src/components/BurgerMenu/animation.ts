import { Variants } from 'framer-motion'

interface Animation {
    item: Variants
    list: Variants
}

export const animation: Animation = {
    item: {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 300, damping: 24 },
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
    },
    list: {
        open: {
            clipPath: 'inset(0% 0% 0% 0% round 10px)',
            transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
            },
        },
        closed: {
            clipPath: 'inset(10% 50% 90% 50% round 10px)',
            transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.3,
            },
        },
    },
}
