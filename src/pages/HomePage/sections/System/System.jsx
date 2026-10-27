import './System.scss';

import { useState } from 'react';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import SectionSubtitle from '../../../../components/SectionSubtitle/SectionSubtitle';
import ArrowButton from '../../../../components/ArrowButton/ArrowButton';

import systems from '../../../../data/systems';

function System() {
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
            <SectionTitle>Розроблено для реальних систем</SectionTitle>
            <div className="system__wrapp">
                <img
                    key={`image-${activeIndex}`}
                    className={slideClass}
                    src={activeSystem.image}
                    alt={activeSystem.alt}
                />

                <div
                    key={`info-${activeIndex}`}
                    className={`system__info ${slideClass}`}
                >
                    <SectionSubtitle className="system__subtitle">
                        {activeSystem.title}
                    </SectionSubtitle>

                    <p>{activeSystem.text}</p>

                    <div className="system__buttons">
                        <ArrowButton
                            className="system__buttons--left"
                            disabled={activeIndex === 0}
                            onClick={showPrevious}
                        />

                        <ArrowButton
                            disabled={
                                activeIndex === systems.length - 1
                            }
                            onClick={showNext}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default System;