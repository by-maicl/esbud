import './ProjectsKstar.scss';

import { useEffect, useRef, useState } from 'react';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import SectionAside from '../../../../components/SectionAside/SectionAside';
import ArrowButton from '../../../../components/ArrowButton/ArrowButton';
import CardImg from '../../../../components/CardImg/CardImg';

import kstarProjects from '../../../../data/kstarProjects';

function ProjectsKstar() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideOffset, setSlideOffset] = useState(0);

    const sliderTrackRef = useRef(null);
    const mobileScrollRef = useRef(null);

    const totalSlides = kstarProjects.length;

    // Управление для десктопа
    const showPrevious = () => {
        setActiveIndex((index) => Math.max(index - 1, 0));
    };

    const showNext = () => {
        setActiveIndex((index) => Math.min(index + 1, totalSlides - 1));
    };

    // Обновление смещения десктопного слайдера
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

    // Отслеживание скролла пальцем на мобильных (свайп)
    const handleMobileScroll = () => {
        const container = mobileScrollRef.current;
        if (!container) return;

        const scrollLeft = container.scrollLeft;
        const cardWidth = container.offsetWidth; // карточка занимает 100% ширины контейнера
        const newIndex = Math.round(scrollLeft / cardWidth);

        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < totalSlides) {
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
        <section className='projectsKstar' id='projects'>
            <div className='projectsKstar__header'>
                <SectionTitle variant='medium'>KSTAR в Україні</SectionTitle>
                <SectionAside className='projectsKstar__header-aside'>
                    Система може конфігуруватися під різні потреби та масштабуватися
                    відповідно до необхідної потужності й ємності.
                </SectionAside>
            </div>

            {/* ДЕСКТОПНЫЙ БЛОК */}
            <div className='projectsKstar__wrapp'>
                <div className='projectsKstar__slide'>
                    <p className='projectsKstar__slide-counter'>
                        <span>
                            {String(activeIndex + 1).padStart(2, '0')}
                        </span>
                        /{String(totalSlides).padStart(2, '0')}
                    </p>
                    <SectionAside size={14} className='projectsKstar__slide-description'>
                        Система може конфігуруватися під різні потреби та масштабуватися відповідно до необхідної потужності й ємності.
                    </SectionAside>
                    <div className='projectsKstar__slide-buttons'>
                        <ArrowButton
                            disabled={activeIndex === 0}
                            onClick={showPrevious}
                        />
                        <ArrowButton
                            disabled={activeIndex === totalSlides - 1}
                            onClick={showNext}
                        />
                    </div>
                </div>

                <div className='projectsKstar__images'>
                    <div
                        className="projectsKstar__track"
                        ref={sliderTrackRef}
                        style={{
                            transform: `translateX(-${slideOffset}px)`,
                        }}
                    >
                        {kstarProjects.map((project) => (
                            <div className="projectsKstar__item" key={project.id}>
                                <CardImg
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

            {/* МОБИЛЬНЫЙ БЛОК (Скролл пальцем + Точки) */}
            <div className='projectsKstar__mobile'>
                <div
                    className='projectsKstar__mobile-scroll'
                    ref={mobileScrollRef}
                    onScroll={handleMobileScroll}
                >
                    {kstarProjects.map((project) => (
                        <div className='projectsKstar__mobile-card' key={`mob-${project.id}`}>
                            <CardImg
                                name={project.name}
                                title={project.title}
                                img={project.img}
                            >
                                {project.description}
                            </CardImg>
                        </div>
                    ))}
                </div>

                {/* Индикаторы-точки */}
                <div className='projectsKstar__dots'>
                    {kstarProjects.map((_, index) => (
                        <button
                            key={index}
                            type='button'
                            className={`projectsKstar__dot ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => scrollToIndex(index)}
                            aria-label={`Перейти до слайду ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsKstar;