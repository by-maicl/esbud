import './HeroGrowatt.scss';

import { ArrowRight } from 'lucide-react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import Category from '../../../../components/Category/Category';
import { useTranslation } from 'react-i18next';

import growattExample from '../../../../assets/growatt/inverter.png';

function Hero() {
    const { t } = useTranslation();
    const scrollToProjects = () => {
        document.getElementById('products')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <section className='heroGrowatt'>
            <p className='heroGrowatt__path'>{t('growatt.heroPath')}</p>

            <div className='heroGrowatt__wrapp'>
                <div className='heroGrowatt__info'>
                    <SectionTitle
                        variant='medium'
                        size={52}
                        className='heroGrowatt__title'
                    >
                        {t('growatt.heroTitle')} <br className="heroGrowatt__title-br" />
                        {t('growatt.heroTitleSuffix')}
                    </SectionTitle>

                    <p className='heroGrowatt__desc'>
                        {t('growatt.heroText')}
                    </p>

                    <button
                        type='button'
                        className='heroGrowatt__btn'
                        onClick={scrollToProjects}
                    >
                        <span>{t('growatt.selectEquipment')}</span>
                        <span className='heroGrowatt__btn-icon'>
                            <ArrowRight size={18} />
                        </span>
                    </button>

                    {/* Десктопные кнопки категорий */}
                    <div className='heroGrowatt__using'>
                        <Category variant='secondary'>{t('growatt.inverters')}</Category>
                        <Category variant='secondary'>{t('growatt.storage')}</Category>
                        <Category variant='secondary'>{t('growatt.monitoring')}</Category>
                    </div>
                </div>

                {/* Белая карточка с инверторами */}
                <div className='heroGrowatt__img'>
                    <div className='heroGrowatt__img-header'>
                        <p className='heroGrowatt__img-name'>{t('growatt.imageTitle')}</p>
                        <div className='heroGrowatt__img-particle'></div>
                    </div>
                    <img src={growattExample} alt={t('growatt.imageAlt')} />
                    <p className='heroGrowatt__img-info'>{t('growatt.imageText')}</p>
                </div>

                {/* Текстовые категории для мобильной версии */}
                <p className='heroGrowatt__using-mobile'>
                    {t('growatt.inverters')} · {t('growatt.storage')} · {t('growatt.monitoring')}
                </p>
            </div>
        </section>
    );
}

export default Hero;