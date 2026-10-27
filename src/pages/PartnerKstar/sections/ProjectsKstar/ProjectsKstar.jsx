import './ProjectsKstar.scss';

import { useEffect, useRef, useState } from 'react';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle'
import SectionAside from '../../../../components/SectionAside/SectionAside';
import ArrowButton from '../../../../components/ArrowButton/ArrowButton';
import CardImg from '../../../../components/CardImg/CardImg';

import kstarProjects from '../../../../data/kstarProjects';

function ProjectsKstar() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideOffset, setSlideOffset] = useState(0);

    const sliderTrackRef = useRef(null);

    const totalSlides = kstarProjects.length;

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
        <section className='projectsKstar' id='projects'>
            <div className='projectsKstar__header'>
                <SectionTitle variant='medium'>KSTAR в Україні</SectionTitle>
                <SectionAside>Надійне живлення, накопичення енергії та керування
                    енергосистемою для бізнесу, промисловості та приватних об'єктів.</SectionAside>
            </div>

            <div className='projectsKstar__wrapp'>
                <div className='projectsKstar__slide'>
                    <p className='projectsKstar__slide-counter'>
                        <span>
                            {String(activeIndex + 1).padStart(2, '0')}
                        </span>
                        /{String(totalSlides).padStart(2, '0')}
                    </p>
                    <SectionAside size={14} className='projectsKstar__slide-description'>Система може конфігуруватися під різні потреби
                        та масштабуватися відповідно до необхідної потужності й ємності.</SectionAside>
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
                            <div
                                className="projectsKstar__item"
                                key={project.id}
                            >
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

        </section>
    );
}

export default ProjectsKstar;