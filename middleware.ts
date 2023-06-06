import { NextResponse, userAgent, NextMiddleware } from 'next/server'
import prod from '@/src/config/prod'

export const middleware: NextMiddleware = async (request, event) => {
    const validUrl = await fetch(request.url)

    if (prod) {
        if (!validUrl.ok) {
            const url = request.nextUrl.clone()
            url.pathname = '/not_found'
            return NextResponse.redirect(url)
        } else {
            return NextResponse.next()
        }
    } else {
        return NextResponse.next()
    }
}

export const config = {
    matcher: ['/:path*'],
}
