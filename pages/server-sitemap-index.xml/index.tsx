import { getServerSideSitemapIndexLegacy } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import fetchPathsCourses from '@/src/api/fetchPathsCourses'

export const getServerSideProps: GetServerSideProps = async ctx => {
    const paths = (
        await Promise.all(
            ctx.locales!.map(async local => {
                const data = await fetchPathsCourses(local)
                return data.map(course => ({
                    params: { slug: course.pathCourse },
                    locale: local,
                }))
            }),
        )
    ).flat(2)

    const fields: string[] = paths.reduce(
        (previousValue, currentValue) =>
            previousValue.concat(
                `https://minzdrav.online${currentValue.locale === 'ru' ? '' : `/${currentValue.locale}`}/courses/${
                    currentValue.params.slug
                }`,
            ),
        ['https://minzdrav.online/courses'],
    )

    return getServerSideSitemapIndexLegacy(ctx, fields)
}

export default function SitemapIndex() {}
