import './HeroModular.scss';

import { ArrowRight } from 'lucide-react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import Category from '../../../../components/Category/Category';

import houseExample from '../../../../assets/modular-houses/house-preview.png';

function Hero() {
    const scrollToProjects = () => {
        document.getElementById('houses')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <section className='heroModular'>
            <p className='heroModular__path'>Головна / Модульні будинки</p>

            <div className='heroModular__wrapp'>
                <div className='heroModular__info'>
                    <SectionTitle
                        variant='medium'
                        color='#fff'
                        size={52}
                        className='heroModular__title'
                    >
                        Модульні будинки <br className="heroModular__title-br" />
                        для життя і бізнесу.
                    </SectionTitle>

                    <p className='heroModular__desc'>
                        Житлові, гостьові та комерційні формати. Оберіть будинок
                        у каталозі — планування й комплектацію уточнимо під ваш проєкт.
                    </p>

                    {/* Десктопна кнопка */}
                    <button
                        type='button'
                        className='heroModular__btn heroModular__btn--desktop'
                        onClick={scrollToProjects}
                    >
                        Переглянути каталог будинків
                    </button>

                    {/* Десктопні плашки категорій */}
                    <div className='heroModular__using'>
                        <Category>Житлові</Category>
                        <Category>Гостьові</Category>
                        <Category>Комерційні</Category>
                    </div>
                </div>

                {/* Блок із зображенням */}
                <div className='heroModular__img'>
                    <img src={houseExample} alt="Модульний будинок" />
                    <p className='heroModular__badge'>Модульний будинок · Каталог</p>
                </div>

                {/* Мобільна кнопка під зображенням */}
                <button
                    type='button'
                    className='heroModular__btn heroModular__btn--mobile'
                    onClick={scrollToProjects}
                >
                    <span>Переглянути каталог будинків</span>
                    <span className='heroModular__btn-icon'>
                        <ArrowRight size={18} />
                    </span>
                </button>

                {/* Мобільний рядок категорій */}
                <p className='heroModular__using-mobile'>
                    Житлові · Гостьові · Комерційні
                </p>
            </div>
        </section>
    );
}

export default Hero;