import './HeroModular.scss';

import { ArrowRight } from 'lucide-react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import Category from '../../../../components/Category/Category';
import { useTranslation } from 'react-i18next';

import houseExample from '../../../../assets/modular-houses/house-preview.png';

function Hero() {
    const { t } = useTranslation();
    const scrollToProjects = () => {
        document.getElementById('houses')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <section className='heroModular'>
            <p className='heroModular__path'>{t('modular.heroPath')}</p>

            <div className='heroModular__wrapp'>
                <div className='heroModular__info'>
                    <SectionTitle
                        variant='medium'
                        color='#fff'
                        size={52}
                        className='heroModular__title'
                    >
                        {t('modular.heroTitle')} <br className="heroModular__title-br" />
                        {t('modular.heroTitleSuffix')}
                    </SectionTitle>

                    <p className='heroModular__desc'>
                        {t('modular.heroText')}
                    </p>

                    {/* Десктопна кнопка */}
                    <button
                        type='button'
                        className='heroModular__btn heroModular__btn--desktop'
                        onClick={scrollToProjects}
                    >
                        {t('modular.catalogButton')}
                    </button>

                    {/* Десктопні плашки категорій */}
                    <div className='heroModular__using'>
                        <Category>{t('modular.residential')}</Category>
                        <Category>{t('modular.guest')}</Category>
                        <Category>{t('modular.commercial')}</Category>
                    </div>
                </div>

                {/* Блок із зображенням */}
                <div className='heroModular__img'>
                    <img src={houseExample} alt={t('modular.houseLabel')} />
                    <p className='heroModular__badge'>{t('modular.badge')}</p>
                </div>

                {/* Мобільна кнопка під зображенням */}
                <button
                    type='button'
                    className='heroModular__btn heroModular__btn--mobile'
                    onClick={scrollToProjects}
                >
                    <span>{t('modular.catalogButton')}</span>
                    <span className='heroModular__btn-icon'>
                        <ArrowRight size={18} />
                    </span>
                </button>

                {/* Мобільний рядок категорій */}
                <p className='heroModular__using-mobile'>
                    {t('modular.residential')} · {t('modular.guest')} · {t('modular.commercial')}
                </p>
            </div>
        </section>
    );
}

export default Hero;