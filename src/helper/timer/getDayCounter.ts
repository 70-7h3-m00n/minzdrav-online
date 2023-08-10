export default function getDayCounter(discount: Array<number>) {
    const date = new Date()
    const currentDate = date.getDate()
    const currentYear = date.getFullYear()
    const currentMonth = date.getMonth()

    const numDays = new Date(currentYear, currentMonth, 0).getDate()
    const nextDay = numDays - currentDate + discount[0]

    // Включительно сегодняшнего дня
    const upToToday = 1

    const filterDiscount = discount.filter(discountData => currentDate <= discountData && discountData <= numDays)[0] + upToToday

    return filterDiscount !== undefined ? filterDiscount - currentDate : nextDay
}
