import './FrameModular.scss';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle'
import SectionAside from '../../../../components/SectionAside/SectionAside';
import Reveal from '../../../../components/Reveal/Reveal';
import Card from '../../../../components/Card/Card';

import modularFrame from '../../../../data/modularFrame';
import { useTranslation } from 'react-i18next';

function FrameModular() {
    const { t } = useTranslation();
    return (
        <section className='frameModular'>
            <div className='frameModular__header'>
                <SectionTitle variant='medium'>{t('modular.frameTitle')}</SectionTitle>
                <SectionAside>{t('modular.frameAside')}</SectionAside>
            </div>

            <div className='frameModular__cards'>
                {modularFrame.map((el, index) => (
                    <Reveal
                        key={el.id}
                        delay={index * 150}
                    >
                        <Card
                            variant='secondary'
                            title={t(`modularFrame.${el.id}.title`)}
                            icon={el.icon}
                        >
                            <ul className='frameModular__card-list'>
                                {el.text.map((_, index) => (
                                    <li key={index}>{t(`modularFrame.${el.id}.text.${index + 1}`)}</li>
                                ))}
                            </ul>
                        </Card>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default FrameModular;