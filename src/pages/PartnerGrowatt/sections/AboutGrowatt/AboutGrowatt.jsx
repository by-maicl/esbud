import './AboutGrowatt.scss';

import { Globe, Users, Network } from 'lucide-react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import SectionSubtitle from '../../../../components/SectionSubtitle/SectionSubtitle';
import Reveal from '../../../../components/Reveal/Reveal';

function AboutGrowatt() {
    const statsData = [
        {
            id: 1,
            title: '180+',
            subtitle: 'Країн',
            icon: Globe,
        },
        {
            id: 2,
            title: '6M+',
            desktopTitle: '6 мільйонів',
            subtitle: 'Користувачів',
            icon: Users,
        },
        {
            id: 3,
            title: '65+',
            subtitle: "Типових об'єктів по всьому світу",
            icon: Network,
        },
    ];

    return (
        <section className='aboutGrowatt'>
            {/* Текстовая часть (на мобилке идет первой) */}
            <Reveal delay={150} className='aboutGrowatt__info'>
                <SectionTitle className='growattText'>Про нас</SectionTitle>
                <SectionSubtitle className='aboutGrowatt__subtitle'>
                    ТОВ «ЕНЕРГОСОЛАРБУД» є офіційним представником обладнання
                    GROWATT - глобального постачальника рішень у сфері розподіленої енергетики.
                </SectionSubtitle>
                <p className='aboutGrowatt__description'>
                    Компанія Growatt була заснована у 2011 році в Шеньчжені, Китай,
                    та спеціалізується на розробці й виробництві обладнання для генерації, накопичення
                    та ефективного використання електроенергії
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