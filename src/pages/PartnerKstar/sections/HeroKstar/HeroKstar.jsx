import './HeroKstar.scss';

import Button from '../../../../components/Button/Button'
import SectionTitle from '../../../../components/SectionTitle/SectionTitle'
import Category from '../../../../components/Category/Category'

import kstarExample from '../../../../assets/kstar/kstar_example.png'

function Hero() {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    return (
        <section className='heroKstar'>
            <p className='heroKstar__path'>Партнери / KSTAR</p>
            <div className='heroKstar__wrapp'>
                <div className='heroKstar__info'>
                    <SectionTitle
                        variant='medium'
                        color='#fff'
                        size={52}
                    >Накопичення енергії. Резервне живлення з KSTAR.</SectionTitle>
                    <p>Акумуляторні системи та гібридні інвертори для дому й бізнесу.
                        Оберіть рішення під ваші потреби в резервному живленні.</p>
                    <Button
                        variant='secondary'
                        className='heroKstar__btn'
                        onClick={scrollToProjects}
                    >Підібрати систему KSTAR</Button>
                    <div className='heroKstar__using'>
                        <Category>Для дому</Category>
                        <Category>Для бізнесу</Category>
                        <Category>Резервне живлення</Category>
                    </div>
                </div>

                <div className='heroKstar__img'>
                    <img src={kstarExample} />
                    <p>KSTAR · Система для приватного будинку</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;