import './HeroKstar.scss';

import { ArrowRight } from 'lucide-react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import Category from '../../../../components/Category/Category';

import kstarExample from '../../../../assets/kstar/kstar_example.png';

function Hero() {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <section className='heroKstar'>
            <p className='heroKstar__path'>Партнери / KSTAR</p>

            <div className='heroKstar__wrapp'>
                <div className='heroKstar__info'>
                    <SectionTitle
                        variant='medium'
                        color='#fff'
                        size={52}
                        className='heroKstar__title'
                    >
                        Накопичення енергії. <br className="heroKstar__title-br" />
                        Резервне живлення з KSTAR.
                    </SectionTitle>

                    <p className='heroKstar__desc'>
                        Акумуляторні системи та гібридні інвертори для дому й бізнесу.
                        Оберіть рішення під ваші потреби в резервному живленні.
                    </p>

                    <button
                        type='button'
                        className='heroKstar__btn'
                        onClick={scrollToProjects}
                    >
                        <span>Підібрати систему KSTAR</span>
                        <span className='heroKstar__btn-icon'>
                            <ArrowRight size={18} />
                        </span>
                    </button>

                    {/* Десктопные плашки категорий */}
                    <div className='heroKstar__using'>
                        <Category>Для дому</Category>
                        <Category>Для бізнесу</Category>
                        <Category>Резервне живлення</Category>
                    </div>
                </div>

                <div className='heroKstar__img'>
                    <img src={kstarExample} alt="KSTAR система" />
                    <p>KSTAR · Система для приватного будинку</p>
                </div>

                {/* Мобильный текстовый список категорий по макету */}
                <p className='heroKstar__using-mobile'>
                    Для дому · Для бізнесу · Резервне живлення
                </p>
            </div>
        </section>
    );
}

export default Hero;