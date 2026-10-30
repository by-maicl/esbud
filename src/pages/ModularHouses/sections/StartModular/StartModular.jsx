import './StartModular.scss';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle'
import SectionAside from '../../../../components/SectionAside/SectionAside';
import CardHorizontal from '../../../../components/CardHorizontal/CardHorizontal';
import Reveal from '../../../../components/Reveal/Reveal';

import { House, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function StartModular() {
    const { t } = useTranslation();
    const modularStart = [
        {
            id: 1,
            title: t('modular.startCards.1.title'),
            text: t('modular.startCards.1.text'),
            icon: House,
        },
        {
            id: 2,
            title: t('modular.startCards.2.title'),
            text: t('modular.startCards.2.text'),
            icon: Sun,
        },
    ];

    return (
        <section className='startModular'>
            <div className='startModular__header'>
                <SectionTitle variant='medium'>{t('modular.startTitle')}</SectionTitle>
                <SectionAside>
                    {t('modular.startAside')}
                </SectionAside>
            </div>

            <div className='startModular__cards'>
                {modularStart.map((el, index) => (
                    <Reveal
                        key={el.id}
                        delay={index * 150}>
                        <CardHorizontal
                            className='startModular__card'
                            title={el.title}
                            icon={el.icon}
                        >
                            {el.text}
                        </CardHorizontal>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default StartModular;