import { buildLeadData } from './buildLeadData'

type TypebuildLeadEmailTbodyTrsProps = {
    data: Awaited<ReturnType<typeof buildLeadData>>
}

export const buildLeadEmailTbodyTrs = ({ data }: TypebuildLeadEmailTbodyTrsProps) => [
    {
        tdKey: 'ID',
        tdVal: data.id || '',
    },
    {
        tdKey: 'Дата',
        tdVal: data.date || '',
    },
    {
        tdKey: 'Время',
        tdVal: data.time || '',
    },
    {
        tdKey: 'UTC',
        tdVal: data.utc || '',
    },
    {
        tdKey: 'Имя',
        tdVal: data.name || '',
    },
    {
        tdKey: 'Телефон',
        tdVal: data.phone || '',
    },
    {
        tdKey: 'Почта',
        tdVal: data.email || '',
    },
    {
        tdKey: 'ВКонтакте',
        tdVal: data.vk || '',
    },
    {
        tdKey: 'Промокод',
        tdVal: data.promocode || '',
    },
    {
        tdKey: 'Способ связи',
        tdVal: data.contactWay || '',
    },
    {
        tdKey: 'Как связаться',
        tdVal: data.contactMethod || '',
    },
    {
        tdKey: 'Вопрос',
        tdVal: data.question || '',
    },
    {
        tdKey: 'Лид сайт',
        tdVal: data.rootPath || '',
    },
    {
        tdKey: 'Лид страница',
        tdVal: data.leadPage || '',
    },
    {
        tdKey: 'IP',
        tdVal: data.ip || '',
    },
    {
        tdKey: 'Город (en)',
        tdVal: data.cityEn || '',
    },
    {
        tdKey: 'Город (ru)',
        tdVal: data.cityRu || '',
    },
    {
        tdKey: 'Код страны',
        tdVal: data.countryCode || '',
    },
    {
        tdKey: 'Страна (en)',
        tdVal: data.countryEn || '',
    },
    {
        tdKey: 'Страна (ru)',
        tdVal: data.countryRu || '',
    },
    {
        tdKey: 'Континент код',
        tdVal: data.continentCode || '',
    },
    {
        tdKey: 'Континент (en)',
        tdVal: data.continentEn || '',
    },
    {
        tdKey: 'Континент (ru)',
        tdVal: data.continentRu || '',
    },
    {
        tdKey: 'Погрешность (м)',
        tdVal: data.accuracyRadius || '',
    },
    {
        tdKey: 'Широта',
        tdVal: data.latitude || '',
    },
    {
        tdKey: 'Долгота',
        tdVal: data.longitude || '',
    },
    {
        tdKey: 'Часовой пояс',
        tdVal: data.timeZone || '',
    },
    {
        tdKey: 'Зип код',
        tdVal: data.postalCode || '',
    },
    {
        tdKey: 'Направление',
        tdVal: data.programTitle || '',
    },
    {
        tdKey: 'Университет',
        tdVal: '',
    },
    {
        tdKey: 'Google Client ID',
        tdVal: '',
    },
    {
        tdKey: 'Yandex Metrics ID',
        tdVal: '',
    },
    {
        tdKey: 'Устройство пользователя',
        tdVal: '',
    },
    {
        tdKey: 'Источник рекламы',
        tdVal: data.utmSource || '',
    },
    {
        tdKey: 'Тип трафика',
        tdVal: data.utmMedium || '',
    },
    {
        tdKey: 'Название РК',
        tdVal: data.utmCampaign || '',
    },
    {
        tdKey: 'Объявление',
        tdVal: data.utmContent || '',
    },
    {
        tdKey: 'Ключевое слово',
        tdVal: data.utmTerm || '',
    },
    {
        tdKey: 'Дубль',
        tdVal: '',
    },
]

export default buildLeadEmailTbodyTrs
