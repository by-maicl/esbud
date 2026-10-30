import './Services.scss';

import { NavLink } from 'react-router';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import SectionSubtitle from '../../../../components/SectionSubtitle/SectionSubtitle';
import SectionAside from '../../../../components/SectionAside/SectionAside';
import Reveal from '../../../../components/Reveal/Reveal';
import ArrowButton from '../../../../components/ArrowButton/ArrowButton';
import { useTranslation } from 'react-i18next';

function Services() {
    const { t } = useTranslation();
    return (
        <section className='services' id='services'>
            <SectionTitle>{t('home.services.title')}</SectionTitle>
            
            <div className='services__grid'>
                <SectionSubtitle className='services__subtitle'>
                    {t('home.services.subtitleFirst')}<br />
                    {t('home.services.subtitleSecond')}
                </SectionSubtitle>
                
                <SectionAside className='services__aside'>
                    {t('home.services.aside')}
                </SectionAside>

                <Reveal className='services__card-reveal'>
                    <NavLink to="/kstar" className='services__link'>
                        <div className="services__option services__option--solar">
                            <p className='services__option-title'>
                                <span></span>{t('home.services.energy')}
                            </p>
                            <div className='services__option-info'>
                                <div className='services__option-text'>
                                    <h4>{t('home.services.solarPanels')}</h4>
                                    <p>
                                        {t('home.services.solarText')}
                                    </p>
                                </div>
                                <ArrowButton className='services__option-btn' />
                            </div>
                        </div>
                    </NavLink>
                </Reveal>

                <Reveal delay={300} className='services__card-reveal'>
                    <NavLink to="/modular-houses" className='services__link'>
                        <div className="services__option services__option--house">
                            <p className='services__option-title'>
                                <span></span>{t('home.services.construction')}
                            </p>
                            <div className='services__option-info'>
                                <div className='services__option-text'>
                                    <h4>{t('home.services.modularHouses')}</h4>
                                    <p>
                                        {t('home.services.modularText')}
                                    </p>
                                </div>
                                <ArrowButton className='services__option-btn' />
                            </div>
                        </div>
                    </NavLink>
                </Reveal>
            </div>
        </section>
    );
}

export default Services;