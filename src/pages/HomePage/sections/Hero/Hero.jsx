import './Hero.scss';
import { useTranslation } from 'react-i18next';

function Hero() {
    const { t } = useTranslation();
    return (
        <section className='hero'>
            <div className='hero__backgroung'>
                <div className='hero__layer-1'></div>
                <div className='hero__layer-text'><h1>{t('home.hero.companyShort')}</h1></div>
                <div className='hero__layer-2'></div>
            </div>

            <div className='hero__info'>
                <h2>{t('home.hero.title')}</h2>
                <p>{t('home.hero.text')}</p>
            </div>
        </section>
    );
}

export default Hero;