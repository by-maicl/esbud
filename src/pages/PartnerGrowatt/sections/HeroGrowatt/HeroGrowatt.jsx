import './HeroGrowatt.scss';

import { ArrowRight } from 'lucide-react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import Category from '../../../../components/Category/Category';

import growattExample from '../../../../assets/growatt/inverter.png';

function Hero() {
    const scrollToProjects = () => {
        document.getElementById('products')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <section className='heroGrowatt'>
            <p className='heroGrowatt__path'>Партнери / Growatt</p>

            <div className='heroGrowatt__wrapp'>
                <div className='heroGrowatt__info'>
                    <SectionTitle
                        variant='medium'
                        size={52}
                        className='heroGrowatt__title'
                    >
                        Сонячні інвертори <br className="heroGrowatt__title-br" />
                        та накопичення енергії Growatt
                    </SectionTitle>

                    <p className='heroGrowatt__desc'>
                        Інвертори й системи накопичення для сонячної енергії. Підберіть
                        обладнання під потреби вашого дому або бізнесу.
                    </p>

                    <button
                        type='button'
                        className='heroGrowatt__btn'
                        onClick={scrollToProjects}
                    >
                        <span>Підібрати обладнання Growatt</span>
                        <span className='heroGrowatt__btn-icon'>
                            <ArrowRight size={18} />
                        </span>
                    </button>

                    {/* Десктопные кнопки категорий */}
                    <div className='heroGrowatt__using'>
                        <Category variant='secondary'>Інвертори</Category>
                        <Category variant='secondary'>Накопичення енергії</Category>
                        <Category variant='secondary'>Моніторинг</Category>
                    </div>
                </div>

                {/* Белая карточка с инверторами */}
                <div className='heroGrowatt__img'>
                    <div className='heroGrowatt__img-header'>
                        <p className='heroGrowatt__img-name'>Сонячні інвертори</p>
                        <div className='heroGrowatt__img-particle'></div>
                    </div>
                    <img src={growattExample} alt="Growatt инверторы" />
                    <p className='heroGrowatt__img-info'>Обладнання для вашої енергосистеми</p>
                </div>

                {/* Текстовые категории для мобильной версии */}
                <p className='heroGrowatt__using-mobile'>
                    Інвертори · Накопичення енергії · Моніторинг
                </p>
            </div>
        </section>
    );
}

export default Hero;