import './DirectionsGrowatt.scss';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import SectionAside from '../../../../components/SectionAside/SectionAside';
import Reveal from '../../../../components/Reveal/Reveal';
import Card from '../../../../components/Card/Card';

import directionsGrowatt from '../../../../data/directionsGrowatt';

function DirectionsGrowatt() {
    return (
        <section className='directionsGrowatt'>
            <div className='directionsGrowatt__header'>
                <SectionTitle className='growattTitle' variant='medium'>Основні напрямки Growatt</SectionTitle>
                <SectionAside className='directionsGrowatt__header-subtitle'>До портфеля компанії входять сонячні інвертори, системи
                    накопичення енергії, зарядні пристрої для електромобілів та рішення
                    для інтелектуального керування енергією. </SectionAside>
            </div>

            <div className='directionsGrowatt__cards'>
                {directionsGrowatt.map((el, index) => (
                    <Reveal key={el.id} delay={150 * index}>
                        <Card
                            icon={el.icon}
                            title={el.title}
                            variant='growatt'
                        >
                            {el.text}
                        </Card>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default DirectionsGrowatt;