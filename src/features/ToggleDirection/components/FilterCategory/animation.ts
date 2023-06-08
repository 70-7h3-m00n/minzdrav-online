export const animation = {
    buttonHover: {
        hover: {
            backgroundColor: '#f7f7f5',
            scale: 1.05,
            color: '#000000',
        },
    },
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
