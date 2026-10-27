import './Services.scss';

import { NavLink } from 'react-router';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import SectionSubtitle from '../../../../components/SectionSubtitle/SectionSubtitle';
import SectionAside from '../../../../components/SectionAside/SectionAside';
import Reveal from '../../../../components/Reveal/Reveal';
import ArrowButton from '../../../../components/ArrowButton/ArrowButton';

function Services() {
    return (
        <section className='services'>
            <SectionTitle>Наші послуги</SectionTitle>
            <div className='services__grid'>
                <SectionSubtitle>Створюємо простір, <br /> підсилюємо його енергією.</SectionSubtitle>
                <SectionAside>Кожен напрям може бути окремим проєктом або частиною комплексного рішення.</SectionAside>

                <Reveal>
                    <NavLink to="/kstar">
                        <div className="services__option services__option--solar">
                            <p className='services__option-title'><span></span>Енергетика</p>
                            <div className='services__option-info'>
                                <h4>Сонячні панелі</h4>
                                <p>Мережеві, гібридні та автономні конфігурації для дому й бізнесу,
                                    з можливістю накопичення та моніторингу.</p>
                                <ArrowButton className='services__option-btn'></ArrowButton>
                            </div>
                        </div>
                    </NavLink>
                </Reveal>

                <Reveal delay={300}>
                    <NavLink to="/modular-houses">
                        <div className="services__option services__option--house">
                            <p className='services__option-title'><span></span>Будівництво</p>
                            <div className='services__option-info'>
                                <h4>Модульні будинки</h4>
                                <p>Житлові, гостьові та комерційні формати з
                                    продуманим плануванням, інженерією й можливістю масштабування.</p>
                                <ArrowButton className='services__option-btn'></ArrowButton>
                            </div>
                        </div>
                    </NavLink>
                </Reveal>
            </div>
        </section>
    );
}

export default Services;