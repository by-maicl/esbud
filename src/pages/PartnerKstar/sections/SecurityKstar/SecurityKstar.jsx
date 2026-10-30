import './SecurityKstar.scss';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle'
import SectionAside from '../../../../components/SectionAside/SectionAside';
import Reveal from '../../../../components/Reveal/Reveal';
import CardHorizontal from '../../../../components/CardHorizontal/CardHorizontal';

import kstarSecurityImg from '../../../../assets/kstar/kstar_security.png'
import kstarSecurity from '../../../../data/kstarSecurity';
import { useTranslation } from 'react-i18next';

function SecurityKstar() {
    const { t } = useTranslation();
    return (
        <section className='securityKstar'>
            <SectionTitle>{t('kstar.securityTitle')}</SectionTitle>
            <SectionAside>{t('kstar.securityAside')}</SectionAside>
            <Reveal><img src={kstarSecurityImg} alt={t('kstar.securityTitle')} className='securityKstar__img' /></Reveal>
            
            <div className='securityKstar__cards'>
                {kstarSecurity.map((el, index) => (
                    <Reveal key={el.id} delay={index * 150}>
                        <CardHorizontal
                            title={t(`kstarSecurity.${el.id}.title`)}
                            icon={el.icon}
                        >
                            {t(`kstarSecurity.${el.id}.description`)}
                        </CardHorizontal>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default SecurityKstar;