import './CatalogModular.scss';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle'
import SectionAside from '../../../../components/SectionAside/SectionAside';
import CardHouse from '../../../../components/CardHouse/CardHouse';

import modularHouses from '../../../../data/modularHouses';

function CatalogModular() {
    return (
        <section className='catalogModular' id='houses'>
            <div className='catalogModular__header'>
                <SectionTitle variant='medium'>Базові конфігурації для точного старту</SectionTitle>
                <SectionAside>
                    Характеристики на картках є орієнтовними й слугують для вибору напряму;
                    фінальні параметри визначаються під час проєктування.
                </SectionAside>
            </div>

            <div className='catalogModular__cards'>
                {modularHouses.map(house => (
                    <CardHouse
                        key={house.key}
                        name={house.name}
                        img={house.img}
                        data={house.data}
                    />
                ))}
            </div>
        </section>
    );
}

export default CatalogModular;