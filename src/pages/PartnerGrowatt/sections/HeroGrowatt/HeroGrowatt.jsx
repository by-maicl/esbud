import './HeroGrowatt.scss';

import Button from '../../../../components/Button/Button'
import SectionTitle from '../../../../components/SectionTitle/SectionTitle'
import Category from '../../../../components/Category/Category'

import growattExample from '../../../../assets/growatt/inverter.png'

function Hero() {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    return (
        <section className='heroGrowatt'>
            <p className='heroGrowatt__path'>Партнери / Growatt</p>
            <div className='heroGrowatt__wrapp'>
                <div className='heroGrowatt__info'>
                    <SectionTitle
                        variant='medium'
                        size={52}
                    >Сонячні інвертори та накопичення енергії Growatt</SectionTitle>
                    <p>Інвертори й системи накопичення для сонячної енергії. Підберіть
                        обладнання під потреби вашого дому або бізнесу.</p>
                    <Button
                        className='heroGrowatt__btn'
                        onClick={scrollToProjects}
                    >Підібрати обладнання Growatt</Button>
                    <div className='heroGrowatt__using'>
                        <Category variant='secondary'>Інвертори</Category>
                        <Category variant='secondary'>Накопичення енергії</Category>
                        <Category variant='secondary'>Моніторинг</Category>
                    </div>
                </div>

                <div className='heroGrowatt__img'>
                    <div className='heroGrowatt__img-header'>
                        <p className='heroGrowatt__img-name'>Сонячні інвертори</p>
                        <div className='heroGrowatt__img-particle'></div>
                    </div>
                    <img src={growattExample} />
                    <p className='heroGrowatt__img-info'>Обладнання для вашої енергосистеми</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;