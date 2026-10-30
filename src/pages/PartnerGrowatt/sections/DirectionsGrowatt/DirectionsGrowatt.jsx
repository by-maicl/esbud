import './DirectionsGrowatt.scss';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import SectionAside from '../../../../components/SectionAside/SectionAside';
import Reveal from '../../../../components/Reveal/Reveal';
import Card from '../../../../components/Card/Card';

import directionsGrowatt from '../../../../data/directionsGrowatt';
import { useTranslation } from 'react-i18next';

function DirectionsGrowatt() {
    const { t } = useTranslation();
    return (
        <section className='directionsGrowatt'>
            <div className='directionsGrowatt__header'>
                <SectionTitle className='growattText' variant='medium'>{t('growatt.directionsTitle')}</SectionTitle>
                <SectionAside className='directionsGrowatt__header-subtitle'>{t('growatt.directionsAside')}</SectionAside>
            </div>

            <div className='directionsGrowatt__cards'>
                {directionsGrowatt.map((el, index) => (
                    <Reveal key={el.id} delay={150 * index}>
                        <Card
                            icon={el.icon}
                            title={t(`directionsGrowatt.${el.id}.title`)}
                            variant='growatt'
                        >
                            {t(`directionsGrowatt.${el.id}.text`)}
                        </Card>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default DirectionsGrowatt;