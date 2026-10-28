import './StartModular.scss';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle'
import SectionAside from '../../../../components/SectionAside/SectionAside';
import CardHorizontal from '../../../../components/CardHorizontal/CardHorizontal';
import Reveal from '../../../../components/Reveal/Reveal';

import { House, Sun } from 'lucide-react';

function StartModular() {
    const modularStart = [
        {
            id: 1,
            title: 'Модульні будинки',
            text: 'Житлові, гостьові та комерційні формати з готовою просторовою логікою.',
            icon: House,
        },
        {
            id: 2,
            title: 'Сонячні рішення',
            text: 'Мережеві, гібридні й масштабовані системи для різних профілів споживання.',
            icon: Sun,
        },
    ];

    return (
        <section className='startModular'>
            <div className='startModular__header'>
                <SectionTitle variant='medium'>Почніть із потрібного сценарію</SectionTitle>
                <SectionAside>
                    Базові продукти допомагають зорієнтуватися. Площа, комплектація,
                    потужність та інженерія уточнюються для конкретного об’єкта.
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