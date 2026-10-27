import './SecurityKstar.scss';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle'
import SectionAside from '../../../../components/SectionAside/SectionAside';
import Reveal from '../../../../components/Reveal/Reveal';
import CardHorizontal from '../../../../components/CardHorizontal/CardHorizontal';

import kstarSecurityImg from '../../../../assets/kstar/kstar_security.png'
import kstarSecurity from '../../../../data/kstarSecurity';

function SecurityKstar() {
    return (
        <section className='securityKstar'>
            <SectionTitle>Багаторівневий захист</SectionTitle>
            <SectionAside>KSTAR використовує комплексний підхід до безпеки систем накопичення</SectionAside>
            <Reveal><img src={kstarSecurityImg} alt="Security" className='securityKstar__img' /></Reveal>
            
            <div className='securityKstar__cards'>
                {kstarSecurity.map((el, index) => (
                    <Reveal key={el.id} delay={index * 150}>
                        <CardHorizontal
                            title={el.title}
                            icon={el.icon}
                        >
                            {el.description}
                        </CardHorizontal>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default SecurityKstar;