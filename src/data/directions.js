import { FileSearchCorner, PencilRuler, PackageCheck, HardHat } from 'lucide-react';

const directions = [
    {
        id: 1,
        icon: FileSearchCorner,
        title: 'Передпроєктний аналіз',
        text: 'Вихідні дані, сценарії, обмеження та технічні вимоги.'
    },
    {
        id: 2,
        icon: PencilRuler,
        title: 'Проєктування',
        text: 'Планування, конструктив, інженерія та енергетична конфігурація.'
    },
    {
        id: 3,
        icon: PackageCheck,
        title: 'Комплектація',
        text: 'Підбір сумісних матеріалів, обладнання й вузлів.'
    },
    {
        id: 4,
        icon: HardHat,
        title: 'Монтаж',
        text: 'Підготовка, встановлення, підключення та контроль якості.'
    },
];

export default directions;