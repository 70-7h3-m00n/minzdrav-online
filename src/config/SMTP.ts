import dev from '@/src/config/dev'

const SMTP = {
    TO: dev ? 'asgyrdjons@gmail.com' : 'info@ipo.msk.ru',
    HOST: 'smtp.jino.ru',
    PASS: process.env.SMTP_PASS,
    FROM: process.env.SMTP_FROM,
    LOGIN: process.env.SMTP_LOGIN,
    PORT: 587,
}

export default SMTP
