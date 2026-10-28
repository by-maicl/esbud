import './About.scss';

import { useEffect, useState } from 'react';

import houseAboutSection from '../../../../assets/home-img/about/house.jpg';
import roofAboutSection from '../../../../assets/home-img/about/roof.jpg';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import SectionSubtitle from '../../../../components/SectionSubtitle/SectionSubtitle';
import SectionAside from '../../../../components/SectionAside/SectionAside';
import Reveal from '../../../../components/Reveal/Reveal';
import IconBlock from '../../../../components/IconBlock/IconBlock';

import {
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
    X,
} from 'lucide-react';

const aboutGalleryImages = Object.entries(
    import.meta.glob('../../../../assets/home-img/projects/*.{jpg,jpeg,png,webp}', {
        eager: true,
        import: 'default',
    })
)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, src]) => src);

function About() {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const currentImage = aboutGalleryImages[activeImageIndex];
    const totalImages = aboutGalleryImages.length;

    const showPrevious = () => {
        setActiveImageIndex((index) =>
            (index - 1 + totalImages) % totalImages
        );
    };

    const showNext = () => {
        setActiveImageIndex((index) =>
            (index + 1) % totalImages
        );
    };

    useEffect(() => {
        if (!isGalleryOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsGalleryOpen(false);
            }

            if (event.key === 'ArrowLeft') {
                setActiveImageIndex((index) =>
                    (index - 1 + totalImages) % totalImages
                );
            }

            if (event.key === 'ArrowRight') {
                setActiveImageIndex((index) =>
                    (index + 1) % totalImages
                );
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isGalleryOpen, totalImages]);

    return (
        <>
            <section className='about' id='aboutUs'>
                <Reveal>
                    <div className="about__left">
                        <SectionTitle>Про нас</SectionTitle>
                        <SectionSubtitle>Будуємо зв’язок між архітектурою та енергетикою</SectionSubtitle>
                        <div className='about__img'>
                            <img src={roofAboutSection} alt="Solar panels" />
                            <img src={houseAboutSection} alt="Modal house" />
                            <button
                                type="button"
                                className="about__img-trigger"
                                aria-label="Відкрити галерею"
                                onClick={() => {
                                    setActiveImageIndex(0);
                                    setIsGalleryOpen(true);
                                }}
                            >
                                <IconBlock
                                    icon={ArrowUpRight}
                                    className="about__img-icon"
                                />
                            </button>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={300}>
                    <div className="about__right">
                        <SectionAside className='about__company-name'>ТОВ «Енергосоларбуд»</SectionAside>
                        <div className='about__info-text'>
                            <h4>Не окремі елементи, а узгоджена інфраструктура.</h4>
                            <p>Ми створюємо комфортне, надійне та енергоефективне житло з 2018 року, яке відповідає сучасним
                                стандартам якості та дизайну.</p>
                            <p>Наші будинки виготовляються з використанням міцних металевих, дерев’яних або змішаних
                                (металево-дерев’яних) каркасів. Каркаси наших будинків забезпечують довговічність конструкцій
                                та стійкість до зовнішніх впливів.</p>
                            <p>Ми пропонуємо українському ринку обладнання для відновлюваної енергетики.
                                ТОВ «ЕНЕРГОСОЛАРБУД» є офіційним представником провідного світового китайського виробника GROWATT,
                                та офіційним дистриб’ютором великої міжнародної китайської компанії KSTAR
                                (Shenzhen KSTAR NEW ENERGY Co, Ltd).</p>
                        </div>
                    </div>
                </Reveal>
            </section >

            {
                isGalleryOpen && (
                    <div
                        className="about__gallery-overlay"
                        onClick={() => setIsGalleryOpen(false)}
                    >
                        <div
                            className="about__gallery"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Галерея про нас"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <button
                                type="button"
                                className="about__gallery-close"
                                aria-label="Закрити галерею"
                                onClick={() => setIsGalleryOpen(false)}
                            >
                                <X size={24} />
                            </button>

                            <button
                                type="button"
                                className="about__gallery-arrow"
                                aria-label="Попереднє зображення"
                                onClick={showPrevious}
                            >
                                <ChevronLeft size={30} />
                            </button>

                            <div className="about__gallery-content">
                                <img
                                    key={currentImage}
                                    className="about__gallery-image"
                                    src={currentImage}
                                    alt={`Проєкт ${activeImageIndex + 1}`}
                                />
                            </div>

                            <button
                                type="button"
                                className="about__gallery-arrow"
                                aria-label="Наступне зображення"
                                onClick={showNext}
                            >
                                <ChevronRight size={30} />
                            </button>

                            <div className="about__gallery-counter">
                                <span>
                                    {String(activeImageIndex + 1).padStart(2, '0')}
                                </span>
                                {' / '}
                                {String(totalImages).padStart(2, '0')}
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    );
}

export default About;