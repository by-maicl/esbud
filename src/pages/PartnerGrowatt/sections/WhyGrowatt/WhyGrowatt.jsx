import './WhyGrowatt.scss';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import SectionAside from '../../../../components/SectionAside/SectionAside';
import Reveal from '../../../../components/Reveal/Reveal';

import homeExample from '../../../../assets/growatt/home-example.png'
import { useTranslation } from 'react-i18next';

function WhyGrowatt() {
    const { t } = useTranslation();
    const reasonsGrowatt = [
        {
            id: 1,
            title: t('growattReasons.1.title'),
            text: t('growattReasons.1.text'),
        },
        {
            id: 2,
            title: t('growattReasons.2.title'),
            text: t('growattReasons.2.text'),
        },
        {
            id: 3,
            title: t('growattReasons.3.title'),
            text: t('growattReasons.3.text'),
        },
        {
            id: 4,
            title: t('growattReasons.4.title'),
            text: t('growattReasons.4.text'),
        },
        {
            id: 5,
            title: t('growattReasons.5.title'),
            text: t('growattReasons.5.text'),
        },
    ];

    return (
        <section className='whyGrowatt'>
            <Reveal className='whyGrowatt__left'>
                <SectionTitle className='growattText'>{t('growatt.whyTitle')}</SectionTitle>
                <SectionAside className='growattText whyGrowatt__text'>{t('growatt.whyAside')}</SectionAside>
                <img src={homeExample} alt={t('home.system.modularTitle')} className='whyGrowatt__img' />
            </Reveal>

            <div className='whyGrowatt__right'>
                {reasonsGrowatt.map((reason, index) => (
                    <Reveal
                        key={reason.id}
                        delay={index * 150 + 200}
                        className='whyGrowatt__reason'
                    >
                        <p className='whyGrowatt__reason-number'>{'0' + reason.id}</p>
                        <div className='whyGrowatt__reason-info'>
                            <h2 className='growattText'>{reason.title}</h2>
                            <p>{reason.text}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default WhyGrowatt;