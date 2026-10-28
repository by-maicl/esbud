import './ProductsGrowatt.scss';

import { useEffect, useRef, useState } from 'react';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import SectionAside from '../../../../components/SectionAside/SectionAside';
import ArrowButton from '../../../../components/ArrowButton/ArrowButton';
import CardImg from '../../../../components/CardImg/CardImg';

import growattProducts from '../../../../data/growattProducts';

function ProductsGrowatt() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideOffset, setSlideOffset] = useState(0);

    const sliderTrackRef = useRef(null);
    const mobileScrollRef = useRef(null);

    const totalSlides = growattProducts.length;

    // Управління для десктопу
    const showPrevious = () => {
        setActiveIndex((index) => Math.max(index - 1, 0));
    };

    const showNext = () => {
        setActiveIndex((index) =>
            Math.min(index + 1, totalSlides - 1)
        );
    };

    // Оновлення зміщення для десктопного слайдера
    useEffect(() => {
        const updateSlidePosition = () => {
            if (window.innerWidth <= 768) return;

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

    // Відстеження свайпу пальцем на телефоні
    const handleMobileScroll = () => {
        const container = mobileScrollRef.current;
        if (!container) return;

        const scrollLeft = container.scrollLeft;
        const cardWidth = container.offsetWidth;
        const newIndex = Math.round(scrollLeft / cardWidth);

        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < totalSlides) {
            setActiveIndex(newIndex);
        }
    };

    // Скрол до слайда при кліку на точку
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
        <section className='productsGrowatt' id='products'>
            <div className='productsGrowatt__header'>
                <SectionTitle variant='medium' className='growattText'>
                    Продукція Growatt
                </SectionTitle>
                <div className='productsGrowatt__header-text'>
                    <SectionAside className='growattText'>
                        Growatt дозволяє об'єднати генерацію, накопичення,
                        споживання та заряджання електромобіля в єдину енергетичну систему.
                    </SectionAside>
                    <p className='productsGrowatt__mobile-note'>
                        Система може конфігуруватися під різні потреби та масштабуватися
                        відповідно до необхідної потужності й ємності.
                    </p>
                </div>
            </div>

            {/* ДЕСКТОПНИЙ СЛАЙДЕР */}
            <div className='productsGrowatt__wrapp'>
                <div className='productsGrowatt__slide'>
                    <p className='productsGrowatt__slide-counter'>
                        <span>
                            {String(activeIndex + 1).padStart(2, '0')}
                        </span>
                        /{String(totalSlides).padStart(2, '0')}
                    </p>
                    <SectionAside size={14} className='productsGrowatt__slide-description growattText'>
                        Система може конфігуруватися під різні потреби
                        та масштабуватися відповідно до необхідної потужності й ємності.
                    </SectionAside>
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

            {/* МОБІЛЬНИЙ СЛАЙДЕР З СКРОЛОМ ПАЛЬЦЕМ ТА ТОЧКАМИ */}
            <div className='productsGrowatt__mobile'>
                <div
                    className='productsGrowatt__mobile-scroll'
                    ref={mobileScrollRef}
                    onScroll={handleMobileScroll}
                >
                    {growattProducts.map((project) => (
                        <div
                            className='productsGrowatt__mobile-card'
                            key={`mob-${project.id}`}
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

                {/* Точки пагінації */}
                <div className='productsGrowatt__dots'>
                    {growattProducts.map((_, index) => (
                        <button
                            key={index}
                            type='button'
                            className={`productsGrowatt__dot ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => scrollToIndex(index)}
                            aria-label={`Перейти до слайду ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductsGrowatt;