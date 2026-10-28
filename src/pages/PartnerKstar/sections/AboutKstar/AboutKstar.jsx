import './AboutKstar.scss';

import { NavLink } from 'react-router';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import SectionSubtitle from '../../../../components/SectionSubtitle/SectionSubtitle';
import Reveal from '../../../../components/Reveal/Reveal';

import kstarAbout from '../../../../data/kstarAbout';

function AboutKstar() {
    return (
        <section className='aboutKstar'>
            

            <div className='aboutKstar__header'>
                <SectionTitle>Про нас</SectionTitle>
                <div className='aboutKstar__header-content'>
                    <SectionSubtitle className='aboutKstar__header-subtitle'>
                        KSTAR є провідним брендом в галузі силової електроніки та нової енергетики
                    </SectionSubtitle>
                    <p className='aboutKstar__header-description'>
                        Бренд KSTAR спеціалізується на виготовленні силової
                        електроніки та нової енергетики, яка успішно впроваджується
                        у критично важливу інфраструктуру центрів обробки даних,
                        модульних та фотоелектричних рішеннях, а також, рішеннях для зберігання електричної енергії.
                    </p>
                </div>
            </div>

            <div className='aboutKstar__info'>
                {kstarAbout.map((el, index) => (
                    <Reveal key={el.id || index} delay={index * 150} className='aboutKstar__card-reveal'>
                        <div className='aboutKstar__card'>
                            <div className='aboutKstar__card-img-wrap'>
                                <img src={el.img} alt={el.title} />
                            </div>
                            <div className='aboutKstar__card-info'>
                                <div className='aboutKstar__card-top'>
                                    <h4 className='aboutKstar__card-title'>{el.title}</h4>
                                    <p className='aboutKstar__card-text'>{el.subtitle}</p>
                                </div>
                                <p className='aboutKstar__card-description'>{el.description}</p>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default AboutKstar;