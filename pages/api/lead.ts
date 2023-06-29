import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import axios from 'axios'
import parseGeneralSlug from '@/src/services/parseGeneralSlug'
import buildLeadData from '@/src/services/buildLeadData'
import createLeadEmailBody from '@/src/services/createLeadEmailBody'
import SMTP from '@/src/config/SMTP'

type TypeNextApiResponseLeadData = {
    readonly err?: unknown
    readonly msg: string
}

const lead = async (req: NextApiRequest, res: NextApiResponse<TypeNextApiResponseLeadData | Error>) => {
    process.env.TZ = 'Europe/Moscow'

    const { email } = req.body
    if (req?.body?.pdfData) {
        let responses
        let attachments = []
        try {
            responses = await Promise.all(
                req.body.pdfData.map(({ url }: { url: string }) => axios.get(url, { responseType: 'arraybuffer' })),
            )
            attachments = responses.map((response, i) => ({
                filename: `${req.body.pdfData[i].name}`,
                content: response.data,
            }))
        } catch (err) {
            res.status(500).json({ msg: 'Не удалось загрузить PDF: ', err })
            return
        }

        const transporterPdf = nodemailer.createTransport({
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

        const mailOptions = {
            from: SMTP.FROM,
            to: email,
            subject: 'Ваш PDF файл',
            attachments,
        }

        transporterPdf.sendMail(mailOptions, (err, info) => {
            if (err) {
                res.status(500).json({ msg: 'Ошибка при отправке почты:', err })
                return
            }
            res.json({ msg: 'Письмо отправлено: ' })
        })
    }

    const utms = JSON.parse('{}')
    let utmsAreEmpty = false

    Object.keys(utms).forEach(key => {
        if (utms.hasOwnProperty(key)) {
            utmsAreEmpty = true
        }
    })

    const utmsQuery = req.headers.referer?.toString().split('?')[1]

    if (utmsQuery) {
        utmsQuery.split('&').forEach(utm => {
            // TODO: fix this eslint-disable-next-line
            // eslint-disable-next-line
            utms[utm.split('=')[0] as string] = utm.split('=')[1]
        })
    }

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
        utms,
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
