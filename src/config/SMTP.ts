import dev from '@/src/config/dev'

const SMTP = {
    TO: dev ? 'asgyrdjons@gmail.com' : 'info@ipo.msk.ru',
    HOST: 'smtp.jino.ru',
    PASS: process.env.SMTP_PASS,
    FROM: 'lead@smtp.new-imo.msk.ru',
    LOGIN: 'lead@smtp.new-imo.msk.ru',
    PORT: 587,
}

export default SMTP
