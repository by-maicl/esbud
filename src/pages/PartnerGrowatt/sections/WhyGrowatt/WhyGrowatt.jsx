import './WhyGrowatt.scss';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import SectionAside from '../../../../components/SectionAside/SectionAside';
import Reveal from '../../../../components/Reveal/Reveal';

import homeExample from '../../../../assets/growatt/home-example.png'

function WhyGrowatt() {
    const reasonsGrowatt = [
        {
            id: 1,
            title: 'Глобальна присутність',
            text: 'Рішення Growatt встановлені у 180+ країнах.',
        },
        {
            id: 2,
            title: 'Широкий асортимент',
            text: 'Від побутових інверторів до рішень для комерційних та промислових об\'єктів',
        },
        {
            id: 3,
            title: 'Розвиток власних технологій',
            text: 'Growatt повідомляє про понад 1 000 R&D-інженерів та 283+ отриманих патенти',
        },
        {
            id: 4,
            title: 'Інтелектуальний моніторинг',
            text: 'Дистанційний контроль і діагностика обладнання.',
        },
        {
            id: 5,
            title: 'Масштабованість',
            text: 'Рішення можна підбирати відповідно до потреб приватного будинку, бізнесу або великого енергетичного об\'єкта.',
        },
    ];

    return (
        <section className='whyGrowatt'>
            <Reveal className='whyGrowatt__left'>
                <SectionTitle className='growattText'>Чому Growatt?</SectionTitle>
                <SectionAside className='growattText whyGrowatt__text'>Growatt пропонує широкий асортимент сонячних
                    інверторів потужністю від 1 кВт до 2,52 МВт. Вони можуть
                    використовуватися в поєднанні з рішеннями для зберігання
                    енергії як для мережевих, так і для автономних систем.</SectionAside>
                <img src={homeExample} alt="House with solar panels" className='whyGrowatt__img' />
            </Reveal>

            <div className='whyGrowatt__right'>
                {reasonsGrowatt.map((reason, index) => (
                    <Reveal
                        key={reason.id}
                        delay={index * 150 + 200}
                        className='whyGrowatt__reason'
                    >
                        <p className='whyGrowatt__reason-number'>{'0' + reason.id}</p>
                        <div className='whyGrowatt__reason-info'>
                            <h2 className='growattText'>{reason.title}</h2>
                            <p>{reason.text}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default WhyGrowatt;