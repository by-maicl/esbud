import './HeroKstar.scss';

import { ArrowRight } from 'lucide-react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import Category from '../../../../components/Category/Category';
import { useTranslation } from 'react-i18next';

import kstarExample from '../../../../assets/kstar/kstar_example.png';

function Hero() {
    const { t } = useTranslation();
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <section className='heroKstar'>
            <p className='heroKstar__path'>{t('kstar.heroPath')}</p>

            <div className='heroKstar__wrapp'>
                <div className='heroKstar__info'>
                    <SectionTitle
                        variant='medium'
                        color='#fff'
                        size={52}
                        className='heroKstar__title'
                    >
                        {t('kstar.heroTitle')} <br className="heroKstar__title-br" />
                        {t('kstar.heroTitleSuffix')}
                    </SectionTitle>

                    <p className='heroKstar__desc'>
                        {t('kstar.heroText')}
                    </p>

                    <button
                        type='button'
                        className='heroKstar__btn'
                        onClick={scrollToProjects}
                    >
                        <span>{t('kstar.selectSystem')}</span>
                        <span className='heroKstar__btn-icon'>
                            <ArrowRight size={18} />
                        </span>
                    </button>

                    {/* Десктопные плашки категорий */}
                    <div className='heroKstar__using'>
                        <Category>{t('kstar.home')}</Category>
                        <Category>{t('kstar.business')}</Category>
                        <Category>{t('kstar.backup')}</Category>
                    </div>
                </div>

                <div className='heroKstar__img'>
                    <img src={kstarExample} alt={t('kstar.imageAlt')} />
                    <p>{t('kstar.imageText')}</p>
                </div>

                {/* Мобильный текстовый список категорий по макету */}
                <p className='heroKstar__using-mobile'>
                    {t('kstar.home')} · {t('kstar.business')} · {t('kstar.backup')}
                </p>
            </div>
        </section>
    );
}

export default Hero;