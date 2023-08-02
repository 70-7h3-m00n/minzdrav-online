import { routeDomainFront } from '@/src/config/routerApi'

const SEO = {
    openGraph: {
        type: 'website',
        locale: 'ru',
        url: 'https://minzdrav.online',
        site_name: 'minzdrav.online',
        tile: 'ИМО - Институт Медицинского Образования, центр последипломного обучения медицинских работников. Повышение квалификации и переподготовка медицинских работников.',
        description:
            'Программы очного и дистанционного обучения по медицинским специальностям, периодическая аккредитация и курсы для медработников с высшим и средним специальным образованием. Соблюдение Федерального закона № 273 "Об образовании в Российской Федерации". Ваше обучение начнется в оговоренные сроки и в удобной форме обучения. Беспроцентная рассрочка на весь период обучения. Предоставляем всю отчетную документацию для Вас и Вашего работодателя.',
        images: [
            {
                url: `${routeDomainFront.root}/icons/imo-logo-512-512.png`,
                width: 512,
                height: 512,
                alt: 'Favicon description',
            },
        ],
    },
    defaultTitle:
        'ИМО - Институт Медицинского Образования, центр последипломного обучения медицинских работников. Повышение квалификации и переподготовка медицинских работников.',
    description:
        'Программы очного и дистанционного обучения по медицинским специальностям, периодическая аккредитация и курсы для медработников с высшим и средним специальным образованием. Соблюдение Федерального закона № 273 "Об образовании в Российской Федерации". Ваше обучение начнется в оговоренные сроки и в удобной форме обучения. Беспроцентная рассрочка на весь период обучения. Предоставляем всю отчетную документацию для Вас и Вашего работодателя.',
    canonical: 'https://minzdrav.online',
}

export default SEO
