import './HeroModular.scss';

import Button from '../../../../components/Button/Button'
import SectionTitle from '../../../../components/SectionTitle/SectionTitle'
import Category from '../../../../components/Category/Category'

import houseExample from '../../../../assets/modular-houses/house-preview.png'

function Hero() {
    const scrollToProjects = () => {
        document.getElementById('houses')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    return (
        <section className='heroModular'>
            <p className='heroModular__path'>Головна / Модульні будинки</p>
            <div className='heroModular__wrapp'>
                <div className='heroModular__info'>
                    <SectionTitle
                        variant='medium'
                        color='#fff'
                        size={52}
                    >
                        Модульні будинки для життя і бізнесу.</SectionTitle>
                    <p>Житлові, гостьові та комерційні формати. Оберіть будинок
                        у каталозі — планування й комплектацію уточнимо під ваш проєкт.</p>
                    <Button
                        variant='secondary'
                        className='heroModular__btn'
                        onClick={scrollToProjects}
                    >Переглянути каталог будинків</Button>
                    <div className='heroModular__using'>
                        <Category>Житлові</Category>
                        <Category>Гостьові</Category>
                        <Category>Комерційні</Category>
                    </div>
                </div>

                <div className='heroModular__img'>
                    <img src={houseExample} />
                    <p>Модульний будинок · Каталог</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;