import image1 from '@/public/images/microbiologis.png'
import { StaticImageData } from 'next/image'

interface SpecialistsExpertsData {
    image: StaticImageData
    title: string
    description: string
}

export const specialistsExpertsData: Array<SpecialistsExpertsData> = [
    {
        image: image1,
        title: 'Собираем лучшие методологии',
        description:
            'Над нашими курсами трудится большая группа специалистов: создатели контента, эксперты по методике, менеджеры по производству, преподаватели, маркетологи и редакторы. Каждый из них тщательно следит за современными трендами на рынке, чтобы разработать и запустить программу высокого качества.',
    },
    {
        image: image1,
        title: 'Строим образовательный путь',
        description:
            'Мы помогаем студентам определить свои ожидания от курсов и выбрать подходящую программу обучения. Мы создаем комфортную образовательную среду, где студенты быстро втягиваются в учебный процесс, получают обратную связь от экспертов и могут делиться опытом с единомышленниками.',
    },
    {
        image: image1,
        title: 'Ведём к результату',
        description:
            'Мы обеспечиваем непрерывную поддержку в течение всего обучения. Наши кураторы и эксперты не дают студентам сойти с дистанции. Мы помогаем определиться с наиболее подходящей программой обучения, а также предоставляем помощь в сборе портфолио и оформлении резюме для аккредитации.',
    },
    {
        image: image1,
        title: 'Учим по гослицензии',
        description:
            'Выпускники получают официальный документ установленного образца: диплом о профессиональной переподготовке, удостоверение о повышении квалификации и набор необходимых баллов НМО. После обучения можно подать заявление на налоговый вычет и вернуть часть денег за обучение.',
    },
]