import './WhyKstar.scss';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle'
import SectionAside from '../../../../components/SectionAside/SectionAside';
import Reveal from '../../../../components/Reveal/Reveal';
import Card from '../../../../components/Card/Card';

import kstarAdvantages from '../../../../data/kstarAdvantages';
import { useTranslation } from 'react-i18next';

function WhyKstar() {
    const { t } = useTranslation();
    return (
        <section className='whyKstar'>
            <div className='whyKstar__header'>
                <SectionTitle variant='medium'>{t('kstar.whyTitle')}</SectionTitle>
                <SectionAside>{t('kstar.whyAside')}</SectionAside>
            </div>

            <div className='whyKstar__cards'>
                {kstarAdvantages.map((el, index) => (
                    <Reveal key={el.id} delay={index * 150}>
                        <Card
                            title={t(`kstarAdvantages.${el.id}.title`)}
                            icon={el.icon}
                            variant='kstar'
                        >
                            {t(`kstarAdvantages.${el.id}.description`)}
                        </Card>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default WhyKstar;