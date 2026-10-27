const projectsImg = Object.entries(
    import.meta.glob('../assets/kstar/projects/*.{jpg,jpeg,png,webp}', {
        eager: true,
        import: 'default',
    })
)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, src]) => src);

const kstarProjects = [
    {
        id: 1,
        name: 'Дніпропетровщина',
        title: 'Кейси CЕС під продаж',
        description: 'Нікопольська СЕС, ДТЕК 200 MW',
        img: projectsImg[0],
    },
    {
        id: 2,
        name: 'Тернопільщина',
        title: 'Кейси УЗЕ для арбітражу електроенергії',
        description: 'Друга черга – 2750 kW та 11825 kWh • Третя черга – 750 kW та 3225 kWh • Четверта черга – 1000 kW та 4300 kWh • П’ята черга – 800 kW та 3440 kWh',
        img: projectsImg[1],
    },
    {
        id: 3,
        name: 'Київщина',
        title: 'Живлення для приватних будинків',
        description: 'Ретрофіт системи через розширення резерву від 200 kW та 400 kWh до 750 kW та 1290 kWh відповідно',
        img: projectsImg[2],
    },
    {
        id: 4,
        name: 'Вінниччина',
        title: 'Кейси УЗЕ для пралень',
        description: '100 kW | 430 kWh',
        img: projectsImg[3],
    },
    {
        id: 5,
        name: 'Чернігівщина',
        title: 'Кейси УЗЕ для ферм, виробництв',
        description: '200 kW | 394 kWh',
        img: projectsImg[4],
    },
    {
        id: 6,
        name: 'Захід України',
        title: 'Кейси УЗЕ для складів, ТРЦ',
        description: '1000 kW | 3940 kWh',
        img: projectsImg[5],
    },
    {
        id: 7,
        name: 'Вінниччина',
        title: 'Кейси УЗЕ для виробників меблів',
        description: '500 kW | 960 kWh',
        img: projectsImg[6],
    },
    {
        id: 8,
        name: 'Харків',
        title: 'Кейси УЗЕ для EV-інфраструктури',
        description: '200 kW | 394 kWh',
        img: projectsImg[7],
    },
    {
        id: 9,
        name: 'Київщина',
        title: 'Кейси УЗЕ для ОСББ',
        description: '70 kW | 140 kWh',
        img: projectsImg[8],
    },
    {
        id: 10,
        name: 'Чернівці',
        title: 'Кейси УЗЕ для дому',
        description: '12 kW | 20 kWh',
        img: projectsImg[9],
    },
];

export default kstarProjects;