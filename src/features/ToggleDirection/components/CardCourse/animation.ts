export const animation = {
    cardCourse: {
        hidden: {
            x: 1000,
            opacity: 0,
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.2,
            },
        }),
    },
}
