import './AboutGrowatt.scss';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle'
import SectionSubtitle from '../../../../components/SectionSubtitle/SectionSubtitle'
import Reveal from '../../../../components/Reveal/Reveal';

function AboutGrowatt() {
    const statsData = [
        {
            id: 1,
            title: '180+',
            subtitle: 'Країн',
        },
        {
            id: 2,
            title: '65+',
            subtitle: 'Типових об\'єктів по всьому світу',
        },
        {
            id: 3,
            title: '6 мільйонів',
            subtitle: 'Користувачів',
        },
    ];

    return (
        <section className='aboutGrowatt'>
            <div className='aboutGrowatt__stats'>
                {statsData.map((stat, index) => (
                    <Reveal
                        delay={index * 150}
                        className='aboutGrowatt__stats-card'
                        key={stat.id}
                    >
                        <h2>{stat.title}</h2>
                        <p>{stat.subtitle}</p>
                    </Reveal>
                ))}
            </div>

            <Reveal delay={300} className='aboutGrowatt__info'>
                <SectionTitle className='growattText'>Про нас</SectionTitle>
                <SectionSubtitle className='aboutGrowatt__subtitle'>ТОВ «ЕНЕРГОСОЛАРБУД» є офіційним представником обладнання
                    GROWATT - глобального постачальника рішень у сфері розподіленої енергетики.</SectionSubtitle>
                <p className='aboutGrowatt__description'>Компанія Growatt була заснована у 2011 році в Шеньчжені, Китай,
                    та спеціалізується на розробці й виробництві обладнання для генерації, накопичення
                    та ефективного використання електроенергії</p>
            </Reveal>
        </section>
    );
}

export default AboutGrowatt;