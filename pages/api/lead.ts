import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import axios from 'axios'
import parseGeneralSlug from '@/src/shared/parseGeneralSlug'
import buildLeadData from '@/src/shared/buildLeadData'
import createLeadEmailBody from '@/src/shared/createLeadEmailBody'
import SMTP from '@/src/config/SMTP'
import { getCookie } from 'cookies-next'

type TypeNextApiResponseLeadData = {
    readonly err?: unknown
    readonly msg: string
}

const lead = async (req: NextApiRequest, res: NextApiResponse<TypeNextApiResponseLeadData | Error>) => {
    process.env.TZ = 'Europe/Moscow'

    const { name, email, phone } = req.body

    const roistatVisit = getCookie('roistat_visit', { req, res })

    await axios.request({
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://cloud.roistat.com/api/proxy/1.0/leads/add?roistat=${roistatVisit}&key=${
            process.env.roistatKey
        }&title=Новая_заявка_с_сайта&name=${encodeURIComponent(name)}&email=${encodeURIComponent(
            email,
        )}&phone=${encodeURIComponent(phone)}&is_skip_sending=1`,
        headers: {},
    })

    const protocol = req.headers['x-forwarded-proto']
    const rootPath = `${protocol ? `${protocol}://` : ''}${req.headers.host}`
    const leadPage = req.headers.referer?.toString()
    const ip =
        req.headers['x-forwarded-for']?.toString() ||
        req.socket.remoteAddress?.toString() ||
        req.connection.remoteAddress?.toString() ||
        null

    const { currentFacultySlug, currentProgramSlug } = parseGeneralSlug(
        leadPage?.replace(`http://localhost:3000//`, ''),
    )

    const location = null

    const data = await buildLeadData({
        ...req.body,
        rootPath,
        leadPage,
        currentFacultySlug,
        currentProgramSlug,
        ip,
        location,
    })
    const subject = `Новая заявка с ${data.rootPath}!`
    const html = createLeadEmailBody({ data, subject })

    const transporter = nodemailer.createTransport({
        // @ts-expect-error remove this line and fix the error
        host: SMTP.HOST,
        port: SMTP.PORT,
        secure: false, // true for 465, false for other ports
        logger: true,
        debug: true,
        tls: {
            rejectUnAuthorized: true,
        },
        auth: {
            user: SMTP.LOGIN,
            pass: SMTP.PASS,
        },
    })
    try {
        const emailRes = await transporter.sendMail({
            from: SMTP.FROM,
            to: SMTP.TO,
            subject, // Subject line
            text: `
      ${data.name}, \n
      ${data.phone}, \n
      ${data.email}
      `, // plain text body
            html,
        })

        console.log('Message sent: %s', emailRes.messageId)
        // res.setHeader('Cache-Control', 'max-age=0, s-maxage=86400')
        res.status(200).json({ msg: 'Email is sent' })
    } catch (err) {
        res.status(500).json({ err, msg: 'Unexpected server error' })
        console.error(err)
    }
}

export default lead
