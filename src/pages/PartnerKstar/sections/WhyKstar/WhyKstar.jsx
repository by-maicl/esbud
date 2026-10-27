import './WhyKstar.scss';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle'
import SectionAside from '../../../../components/SectionAside/SectionAside';
import Reveal from '../../../../components/Reveal/Reveal';
import Card from '../../../../components/Card/Card';

import kstarAdvantages from '../../../../data/kstarAdvantages';

function WhyKstar() {
    return (
        <section className='whyKstar'>
            <div className='whyKstar__header'>
                <SectionTitle variant='medium'>Чому KSTAR?</SectionTitle>
                <SectionAside>KSTAR об'єднує в єдину систему гібридні інвертори, акумуляторні модулі,
                    системи керування EMS, резервне живлення, сонячну генерацію та генератори.</SectionAside>
            </div>

            <div className='whyKstar__cards'>
                {kstarAdvantages.map((el, index) => (
                    <Reveal key={el.id} delay={index * 150}>
                        <Card
                            title={el.title}
                            icon={el.icon}
                            variant='kstar'
                        >
                            {el.description}
                        </Card>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default WhyKstar;