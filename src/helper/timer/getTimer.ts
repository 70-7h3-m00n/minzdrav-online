export default function getTimer(discount: Array<number>) {
    const date = new Date()
    const currentDate = date.getDate()
    const currentYear = date.getFullYear()
    const currentMonth = date.getMonth()
    const numDays = new Date(currentYear, currentMonth, 0).getDate()

    const nextMonth = currentMonth + 1 > 11 ? 1 : currentMonth + 1
    const nextYear = currentMonth + 1 > 11 ? currentYear + 1 : currentYear
    const filterDiscount = discount.filter(discountData => currentDate <= discountData && discountData <= numDays)[0]

    return filterDiscount !== undefined
        ? new Date(nextYear, currentMonth, filterDiscount).getTime() - date.getTime()
        : new Date(nextYear, nextMonth, discount[0]).getTime() - date.getTime()
}
