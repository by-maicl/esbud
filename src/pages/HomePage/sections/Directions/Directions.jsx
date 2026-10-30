import './Directions.scss';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import SectionAside from '../../../../components/SectionAside/SectionAside';
import Reveal from '../../../../components/Reveal/Reveal';
import Card from '../../../../components/Card/Card';

import directions from '../../../../data/directions';
import { useTranslation } from 'react-i18next';

function Directions() {
    const { t } = useTranslation();
    return (
        <section className='directions'>
            <div className='directions__header'>
                <SectionTitle variant='medium'>{t('home.directions.title')}</SectionTitle>
                <SectionAside>{t('home.directions.aside')}</SectionAside>
            </div>

            <div className='directions__cards'>
                {directions.map((el, index) => (
                    <Reveal key={el.id} delay={150 * index}>
                        <Card
                            icon={el.icon}
                            title={t(`directions.${el.id}.title`)}
                        >
                            {t(`directions.${el.id}.text`)}
                        </Card>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default Directions;