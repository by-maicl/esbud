import './System.scss';

import { useState } from 'react';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import SectionSubtitle from '../../../../components/SectionSubtitle/SectionSubtitle';
import ArrowButton from '../../../../components/ArrowButton/ArrowButton';

import systems from '../../../../data/systems';
import { useTranslation } from 'react-i18next';

function System() {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState('next');

    const activeSystem = systems[activeIndex];

    const showPrevious = () => {
        if (activeIndex === 0) return;

        setDirection('prev');
        setActiveIndex((index) => index - 1);
    };

    const showNext = () => {
        if (activeIndex === systems.length - 1) return;

        setDirection('next');
        setActiveIndex((index) => index + 1);
    };

    const slideClass =
        direction === 'next'
            ? 'system__slide--next'
            : 'system__slide--prev';

    return (
        <section className='system'>
            <SectionTitle>{t('home.system.title')}</SectionTitle>

            {/* Десктопная версия: слайдер со стрелками */}
            <div className="system__desktop-slider">
                <div className="system__wrapp">
                    <img
                        key={`image-${activeIndex}`}
                        className={slideClass}
                        src={activeSystem.image}
                        alt={t(`home.system.${activeIndex === 0 ? 'energyAlt' : 'modularAlt'}`)}
                    />

                    <div
                        key={`info-${activeIndex}`}
                        className={`system__info ${slideClass}`}
                    >
                        <SectionSubtitle className="system__subtitle">
                            {t(`home.system.${activeIndex === 0 ? 'energyTitle' : 'modularTitle'}`)}
                        </SectionSubtitle>

                        <p>{t(`home.system.${activeIndex === 0 ? 'energyText' : 'modularText'}`)}</p>

                        <div className="system__buttons">
                            <ArrowButton
                                className="system__buttons--left"
                                disabled={activeIndex === 0}
                                onClick={showPrevious}
                            />

                            <ArrowButton
                                disabled={activeIndex === systems.length - 1}
                                onClick={showNext}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Мобильная версия: вертикальный список всех систем по макету */}
            <div className="system__mobile-list">
                {systems.map((item, idx) => (
                    <article key={idx} className="system__mobile-item">
                        <div className="system__mobile-img-wrapper">
                            <img src={item.image} alt={t(`home.system.${idx === 0 ? 'energyAlt' : 'modularAlt'}`)} />
                        </div>
                        <div className="system__mobile-content">
                            <h3>{t(`home.system.${idx === 0 ? 'energyTitle' : 'modularTitle'}`)}</h3>
                            <p>{t(`home.system.${idx === 0 ? 'energyText' : 'modularText'}`)}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default System;