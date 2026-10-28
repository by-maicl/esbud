const productsImg = Object.entries(
    import.meta.glob('../assets/growatt/products/*.{jpg,jpeg,png,webp}', {
        eager: true,
        import: 'default',
    })
)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, src]) => src);

const growattProducts = [
    {
        id: 1,
        name: 'MAX 100-150KTL3-X LV',
        title: 'Інвертори',
        description: 'MIC, MIN, MOD, MID, MAX',
        img: productsImg[0],
    },
    {
        id: 2,
        name: 'SPF 6000 ES Plus',
        title: 'Батареї',
        description: 'ARK, AXE, BDC, HVC',
        img: productsImg[1],
    },
    {
        id: 3,
        name: 'ShineLink-X2',
        title: 'Аксесуари',
        description: 'Пристрої для підключення та керування',
        img: productsImg[2],
    },
    {
        id: 4,
        name: 'THOR 11/22AS-S/P/SE/PE',
        title: 'EV-зарядні пристрої',
        description: 'THOR та інші EV-рішення',
        img: productsImg[3],
    },
    {
        id: 5,
        name: 'Growatt Monitoring Platform',
        title: 'Моніторинг',
        description: 'Рішення для контролю енергоспоживання',
        img: productsImg[4],
    },
];

export default growattProducts;