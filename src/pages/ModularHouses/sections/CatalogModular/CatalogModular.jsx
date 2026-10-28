import './CatalogModular.scss';

import { useRef, useState } from 'react';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import SectionAside from '../../../../components/SectionAside/SectionAside';
import CardHouse from '../../../../components/CardHouse/CardHouse';

import modularHouses from '../../../../data/modularHouses';

function CatalogModular() {
    const [activeIndex, setActiveIndex] = useState(0);
    const mobileScrollRef = useRef(null);

    const totalHouses = modularHouses.length;

    // Отслеживание свайпа пальцем
    const handleMobileScroll = () => {
        const container = mobileScrollRef.current;
        if (!container) return;

        const scrollLeft = container.scrollLeft;
        const cardWidth = container.offsetWidth;
        const newIndex = Math.round(scrollLeft / cardWidth);

        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < totalHouses) {
            setActiveIndex(newIndex);
        }
    };

    // Переход по клику на точку
    const scrollToIndex = (index) => {
        setActiveIndex(index);

        if (mobileScrollRef.current) {
            const cardWidth = mobileScrollRef.current.offsetWidth;
            mobileScrollRef.current.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className='catalogModular' id='houses'>
            <div className='catalogModular__header'>
                <SectionTitle variant='medium'>Базові конфігурації для точного старту</SectionTitle>
                <SectionAside>
                    Характеристики на картках є орієнтовними й слугують для вибору напряму;
                    фінальні параметри визначаються під час проєктування.
                </SectionAside>
            </div>

            {/* Десктопная сетка из 3 колонок */}
            <div className='catalogModular__cards catalogModular__cards--desktop'>
                {modularHouses.map(house => (
                    <CardHouse
                        key={house.key || house.id || house.name}
                        name={house.name}
                        img={house.img}
                        data={house.data}
                    />
                ))}
            </div>

            {/* Мобильный контейнер со свайпом и точками */}
            <div className='catalogModular__mobile'>
                <div
                    className='catalogModular__mobile-scroll'
                    ref={mobileScrollRef}
                    onScroll={handleMobileScroll}
                >
                    {modularHouses.map(house => (
                        <div
                            className='catalogModular__mobile-item'
                            key={`mob-${house.key || house.id || house.name}`}
                        >
                            <CardHouse
                                name={house.name}
                                img={house.img}
                                data={house.data}
                            />
                        </div>
                    ))}
                </div>

                {/* Индикаторы-точки */}
                <div className='catalogModular__dots'>
                    {modularHouses.map((_, index) => (
                        <button
                            key={index}
                            type='button'
                            className={`catalogModular__dot ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => scrollToIndex(index)}
                            aria-label={`Перейти до будинку ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CatalogModular;