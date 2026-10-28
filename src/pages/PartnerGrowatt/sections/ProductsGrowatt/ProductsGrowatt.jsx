import './ProductsGrowatt.scss';

import { useEffect, useRef, useState } from 'react';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle'
import SectionAside from '../../../../components/SectionAside/SectionAside';
import ArrowButton from '../../../../components/ArrowButton/ArrowButton';
import CardImg from '../../../../components/CardImg/CardImg';

import growattProducts from '../../../../data/growattProducts';

function ProductsGrowatt() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideOffset, setSlideOffset] = useState(0);

    const sliderTrackRef = useRef(null);

    const totalSlides = growattProducts.length;

    const showPrevious = () => {
        setActiveIndex((index) => Math.max(index - 1, 0));
    };

    const showNext = () => {
        setActiveIndex((index) =>
            Math.min(index + 1, totalSlides - 1)
        );
    };

    useEffect(() => {
        const updateSlidePosition = () => {
            const track = sliderTrackRef.current;

            if (!track) return;

            const activeSlide = track.children[activeIndex];

            if (activeSlide) {
                setSlideOffset(activeSlide.offsetLeft);
            }
        };

        updateSlidePosition();

        window.addEventListener('resize', updateSlidePosition);

        return () => {
            window.removeEventListener('resize', updateSlidePosition);
        };
    }, [activeIndex, totalSlides]);

    return (
        <section className='productsGrowatt' id='products'>
            <div className='productsGrowatt__header'>
                <SectionTitle variant='medium' className='growattText'>Продукція Growatt</SectionTitle>
                <SectionAside className='growattText'>Growatt дозволяє об'єднати генерацію, накопичення,
                    споживання та заряджання електромобіля в єдину енергетичну систему.</SectionAside>
            </div>

            <div className='productsGrowatt__wrapp'>
                <div className='productsGrowatt__slide'>
                    <p className='productsGrowatt__slide-counter'>
                        <span>
                            {String(activeIndex + 1).padStart(2, '0')}
                        </span>
                        /{String(totalSlides).padStart(2, '0')}
                    </p>
                    <SectionAside size={14} className='productsGrowatt__slide-description growattText'>Система може конфігуруватися під різні потреби
                        та масштабуватися відповідно до необхідної потужності й ємності.</SectionAside>
                    <div className='productsGrowatt__slide-buttons'>
                        <ArrowButton
                            variant='growatt'
                            disabled={activeIndex === 0}
                            onClick={showPrevious}
                        />
                        <ArrowButton
                            variant='growatt'
                            disabled={activeIndex === totalSlides - 1}
                            onClick={showNext}
                        />
                    </div>
                </div>

                <div className='productsGrowatt__images'>
                    <div
                        className="productsGrowatt__track"
                        ref={sliderTrackRef}
                        style={{
                            transform: `translateX(-${slideOffset}px)`,
                        }}
                    >
                        {growattProducts.map((project) => (
                            <div
                                className="productsGrowatt__item"
                                key={project.id}
                            >
                                <CardImg
                                    variant='growatt'
                                    name={project.name}
                                    title={project.title}
                                    img={project.img}
                                >
                                    {project.description}
                                </CardImg>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}

export default ProductsGrowatt;