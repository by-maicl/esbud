import './Services.scss';

import { NavLink } from 'react-router';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import SectionSubtitle from '../../../../components/SectionSubtitle/SectionSubtitle';
import SectionAside from '../../../../components/SectionAside/SectionAside';
import Reveal from '../../../../components/Reveal/Reveal';
import ArrowButton from '../../../../components/ArrowButton/ArrowButton';

function Services() {
    return (
        <section className='services' id='services'>
            <SectionTitle>Наші послуги</SectionTitle>
            
            <div className='services__grid'>
                <SectionSubtitle className='services__subtitle'>
                    Створюємо простір, <br /> підсилюємо його енергією.
                </SectionSubtitle>
                
                <SectionAside className='services__aside'>
                    Кожен напрям може бути окремим проєктом або частиною комплексного рішення.
                </SectionAside>

                <Reveal className='services__card-reveal'>
                    <NavLink to="/kstar" className='services__link'>
                        <div className="services__option services__option--solar">
                            <p className='services__option-title'>
                                <span></span>Енергетика
                            </p>
                            <div className='services__option-info'>
                                <div className='services__option-text'>
                                    <h4>Сонячні панелі</h4>
                                    <p>
                                        Мережеві, гібридні та автономні конфігурації для дому й бізнесу,
                                        з можливістю накопичення та моніторингу.
                                    </p>
                                </div>
                                <ArrowButton className='services__option-btn' />
                            </div>
                        </div>
                    </NavLink>
                </Reveal>

                <Reveal delay={300} className='services__card-reveal'>
                    <NavLink to="/modular-houses" className='services__link'>
                        <div className="services__option services__option--house">
                            <p className='services__option-title'>
                                <span></span>Будівництво
                            </p>
                            <div className='services__option-info'>
                                <div className='services__option-text'>
                                    <h4>Модульні будинки</h4>
                                    <p>
                                        Житлові, гостьові та комерційні формати з
                                        продуманим плануванням, інженерією й можливістю масштабування.
                                    </p>
                                </div>
                                <ArrowButton className='services__option-btn' />
                            </div>
                        </div>
                    </NavLink>
                </Reveal>
            </div>
        </section>
    );
}

export default Services;