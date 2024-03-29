export default function getDaysDiscount(discount: Array<number>): string {
    const date = new Date()
    const currentDate = date.getDate()
    const currentYear = date.getFullYear()
    const currentMonth = date.getMonth()
    const numDays = new Date(currentYear, currentMonth, 0).getDate()

    const nextMonth = currentMonth + 2 > 12 ? 1 : currentMonth + 2
    const nextYear = currentMonth + 2 > 12 ? currentYear + 1 : currentYear
    const filterDiscount = discount.filter(discountData => currentDate <= discountData && discountData <= numDays)[0]

    const setZero = (data: number): string => (data < 10 ? `0${data}` : `${data}`)

    return filterDiscount !== undefined
        ? `${filterDiscount}.${setZero(currentMonth + 1)}.${nextYear}`
        : `${discount[0]}.${setZero(nextMonth)}.${nextYear}`
}
