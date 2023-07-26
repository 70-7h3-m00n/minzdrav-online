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

    const fields: string[] = paths.map(path => `https://minzdrav.online/${path.locale}/courses/${path.params.slug}`)

    return getServerSideSitemapIndexLegacy(ctx, fields)
}

export default function SitemapIndex() {}
