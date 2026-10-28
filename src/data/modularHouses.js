const housesImg = Object.entries(
    import.meta.glob('../assets/modular-houses/houses/*.{jpg,jpeg,png,webp}', {
        eager: true,
        import: 'default',
    })
)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, src]) => src);

const modularHouses = [
    {
        id: 1,
        name: 'House 1',
        img: housesImg[0],
        data: [
            'Площа, M2: 82',
            'Поверховість: 2',
        ],
    },
    {
        id: 2,
        name: 'House 2',
        img: housesImg[1],
        data: [
            'Площа, M2: 35',
            'Поверховість: 1',
        ],
    },
    {
        id: 3,
        name: 'House 3',
        img: housesImg[2],
        data: [
            'Площа, M2: 32,5',
            'Поверховість: 1',
        ],
    },
    {
        id: 4,
        name: 'House 4',
        img: housesImg[3],
        data: [
            'Площа, M2: 30',
            'Поверховість: 1',
        ],
    },
    {
        id: 5,
        name: 'House 5',
        img: housesImg[4],
        data: [
            'Площа, M2: 103,7',
            'Поверховість: 1',
        ],
    },
    {
        id: 6,
        name: 'House 6',
        img: housesImg[5],
        data: [
            'Площа, M2: 96',
            'Поверховість: 1',
        ],
    },
];

export default modularHouses