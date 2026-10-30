import './AboutGrowatt.scss';

import { Globe, Users, Network } from 'lucide-react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import SectionSubtitle from '../../../../components/SectionSubtitle/SectionSubtitle';
import Reveal from '../../../../components/Reveal/Reveal';
import { useTranslation } from 'react-i18next';

function AboutGrowatt() {
    const { t } = useTranslation();
    const statsData = [
        {
            id: 1,
            title: '180+',
            subtitle: t('growatt.countries'),
            icon: Globe,
        },
        {
            id: 2,
            title: '6M+',
            desktopTitle: t('growatt.millionUsers'),
            subtitle: t('growatt.users'),
            icon: Users,
        },
        {
            id: 3,
            title: '65+',
            subtitle: t('growatt.objects'),
            icon: Network,
        },
    ];

    return (
        <section className='aboutGrowatt'>
            {/* Текстовая часть (на мобилке идет первой) */}
            <Reveal delay={150} className='aboutGrowatt__info'>
                <SectionTitle className='growattText'>{t('growatt.aboutTitle')}</SectionTitle>
                <SectionSubtitle className='aboutGrowatt__subtitle'>
                    {t('growatt.aboutSubtitle')}
                </SectionSubtitle>
                <p className='aboutGrowatt__description'>
                    {t('growatt.aboutText')}
                </p>
            </Reveal>

            {/* Карточки статистики (на мобилке идут снизу) */}
            <div className='aboutGrowatt__stats'>
                {statsData.map((stat, index) => {
                    const IconComponent = stat.icon;

                    return (
                        <Reveal
                            delay={index * 150}
                            className='aboutGrowatt__stats-card'
                            key={stat.id}
                        >
                            {/* Круглая зеленая иконка для мобильной версии */}
                            <div className='aboutGrowatt__stats-icon'>
                                <IconComponent size={24} />
                            </div>

                            <h2>
                                <span className='aboutGrowatt__title-mobile'>{stat.title}</span>
                                <span className='aboutGrowatt__title-desktop'>
                                    {stat.desktopTitle || stat.title}
                                </span>
                            </h2>
                            <p>{stat.subtitle}</p>
                        </Reveal>
                    );
                })}
            </div>
        </section>
    );
}

export default AboutGrowatt;