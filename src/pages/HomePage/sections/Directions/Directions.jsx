import './Directions.scss';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import SectionAside from '../../../../components/SectionAside/SectionAside';
import Reveal from '../../../../components/Reveal/Reveal';
import Card from '../../../../components/Card/Card';

import directions from '../../../../data/directions';

function Directions() {
    return (
        <section className='directions'>
            <div className='directions__header'>
                <SectionTitle variant='medium'>Від ідеї до готової системи</SectionTitle>
                <SectionAside>Підключаємо потрібні спеціалізації послідовно,
                    щоб рішення залишалося цілісним на кожному етапі.</SectionAside>
            </div>

            <div className='directions__cards'>
                {directions.map((el, index) => (
                    <Reveal key={el.id} delay={150 * index}>
                        <Card
                            icon={el.icon}
                            title={el.title}
                        >
                            {el.text}
                        </Card>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default Directions;