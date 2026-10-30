import './AboutKstar.scss';

import { NavLink } from 'react-router';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import SectionSubtitle from '../../../../components/SectionSubtitle/SectionSubtitle';
import Reveal from '../../../../components/Reveal/Reveal';

import kstarAbout from '../../../../data/kstarAbout';
import { useTranslation } from 'react-i18next';

function AboutKstar() {
    const { t } = useTranslation();
    return (
        <section className='aboutKstar'>
            

            <div className='aboutKstar__header'>
                <SectionTitle>{t('kstar.aboutTitle')}</SectionTitle>
                <div className='aboutKstar__header-content'>
                    <SectionSubtitle className='aboutKstar__header-subtitle'>
                        {t('kstar.aboutSubtitle')}
                    </SectionSubtitle>
                    <p className='aboutKstar__header-description'>
                        {t('kstar.aboutText')}
                    </p>
                </div>
            </div>

            <div className='aboutKstar__info'>
                {kstarAbout.map((el, index) => (
                    <Reveal key={el.id || index} delay={index * 150} className='aboutKstar__card-reveal'>
                        <div className='aboutKstar__card'>
                            <div className='aboutKstar__card-img-wrap'>
                                <img src={el.img} alt={t(`kstarAbout.${el.id}.title`)} />
                            </div>
                            <div className='aboutKstar__card-info'>
                                <div className='aboutKstar__card-top'>
                                    <h4 className='aboutKstar__card-title'>{t(`kstarAbout.${el.id}.title`)}</h4>
                                    <p className='aboutKstar__card-text'>{t(`kstarAbout.${el.id}.subtitle`)}</p>
                                </div>
                                <p className='aboutKstar__card-description'>{t(`kstarAbout.${el.id}.description`)}</p>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default AboutKstar;