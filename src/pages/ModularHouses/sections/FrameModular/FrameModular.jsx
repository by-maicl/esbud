import './FrameModular.scss';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle'
import SectionAside from '../../../../components/SectionAside/SectionAside';
import Reveal from '../../../../components/Reveal/Reveal';
import Card from '../../../../components/Card/Card';

import modularFrame from '../../../../data/modularFrame';

function FrameModular() {
    return (
        <section className='frameModular'>
            <div className='frameModular__header'>
                <SectionTitle variant='medium'>Каркас</SectionTitle>
                <SectionAside>
                    Ми виготовляємо надійні металеві та дерев’яні каркаси
                    для модульних будинків, які забезпечують міцність і довговічність споруди
                </SectionAside>
            </div>

            <div className='frameModular__cards'>
                {modularFrame.map((el, index) => (
                    <Reveal
                        key={el.id}
                        delay={index * 150}
                    >
                        <Card
                            variant='secondary'
                            title={el.title}
                            icon={el.icon}
                        >
                            <ul className='frameModular__card-list'>
                                {el.text.map((listEl, index) => (
                                    <li key={index}>{listEl}</li>
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