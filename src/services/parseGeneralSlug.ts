export const parseGeneralSlug = (str: string | null | undefined) => {
    const strSplit = str?.split('--') || null

    const sortKeys = ['alphabet', 'cost', 'duration', 'popularity']

    const bachelorKeys = ['bakalavriat', 'bachelor', 'bakalavriat-1', 'bakalavr']

    const masterKeys = ['magistratura', 'master', 'magistr-de-geji', 'magistr-diplomi']

    const mbaKeys = ['mba', 'mba-1', 'mba-2', 'mba-3']

    const higherEducationKeys = [...bachelorKeys, ...masterKeys, ...mbaKeys]

    const courseKeys = ['kursy', 'courses', 'kurslar', 'kurstar', 'kurs']
    const programsKeys = ['programmy', 'programs', 'programlar', 'programlar']

    const facultyKeys = ['fakultet', 'faculty', 'fakultet', 'fakultetler']

    const journalKeys = ['articles', 'articles', 'maqolalar', 'maqalalar']

    const isProgramsPage =
        (strSplit && [...higherEducationKeys, ...courseKeys, ...programsKeys].some(key => key === strSplit?.[0])) ||
        false

    const isProgramsFacultyPage = (isProgramsPage && facultyKeys.some(key => key === strSplit?.[1])) || false

    const isProgramPage =
        (!isProgramsPage &&
            [...higherEducationKeys, ...courseKeys].some(key => key === strSplit?.[strSplit.length - 1])) ||
        false

    const isJournalsPage = [...journalKeys].some(key => key === strSplit?.[0] && strSplit.length <= 2) || false

    const currentCategorySlug =
        (isProgramsPage &&
            [...higherEducationKeys, ...courseKeys].some(key => key === strSplit?.[0]) &&
            strSplit?.[0]) ||
        (isProgramPage && strSplit?.[strSplit.length - 1]) ||
        null

    const currentFacultySlug = (isProgramsFacultyPage && strSplit?.[2]) || null

    const currentProgramSlug = (isProgramPage && strSplit?.[0]) || null

    const currentSearchSlugs =
        (isProgramsPage &&
            !isProgramsFacultyPage &&
            strSplit?.length !== undefined &&
            strSplit.length >= 2 &&
            strSplit?.slice(1, strSplit.length)) ||
        null

    const currentJournalsByFacultySlug = (isJournalsPage && strSplit?.[1]) || null

    const currentJournalSlug = (!isJournalsPage && strSplit?.[2]) || null

    const currentSortKey = (isProgramsPage && sortKeys.find(key => key === strSplit?.[strSplit.length - 1])) || null

    const isBachelor = bachelorKeys.some(key => key === currentCategorySlug)

    const isMaster = masterKeys.some(key => key === currentCategorySlug)

    const isMba = mbaKeys.some(key => key === currentCategorySlug)

    const isHigherEducation = higherEducationKeys.some(key => key === currentCategorySlug)

    const isCourse = courseKeys.some(key => key === currentCategorySlug)

    return {
        isProgramsPage,
        isProgramsFacultyPage,
        isProgramPage,
        isJournalsPage,
        isBachelor,
        isMaster,
        isMba,
        isHigherEducation,
        isCourse,
        currentCategorySlug,
        currentFacultySlug,
        currentProgramSlug,
        currentJournalsByFacultySlug,
        currentJournalSlug,
        currentSearchSlugs,
        currentSortKey,
    }
}

export default parseGeneralSlug
