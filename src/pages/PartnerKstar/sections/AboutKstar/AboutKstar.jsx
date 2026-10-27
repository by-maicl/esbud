import './AboutKstar.scss';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle'
import SectionSubtitle from '../../../../components/SectionSubtitle/SectionSubtitle'
import Reveal from '../../../../components/Reveal/Reveal';

import kstarAbout from '../../../../data/kstarAbout';

function AboutKstar() {
    return (
        <section className='aboutKstar'>
            <div className='aboutKstar__header'>
                <SectionTitle>Про нас</SectionTitle>
                <div>
                    <SectionSubtitle style={{ margin: 0 }}>KSTAR є провідним брендом в галузі
                        силової електроніки та нової енергетики</SectionSubtitle>
                    <p className='aboutKstar__header-description'>Бренд KSTAR спеціалізується на виготовленні силової
                        електроніки та нової енергетики, яка успішно впроваджується
                        у критично важливу інфраструктуру центрів обробки даних,
                        модульних та фотоелектричних рішеннях, а також, рішеннях для зберігання електричної енергії.</p>
                </div>
            </div>

            <div className='aboutKstar__info'>
                {kstarAbout.map((el, index) => (
                    <Reveal key={el.id} delay={index * 150} className='aboutKstar__card'>
                        <img src={el.img} />
                        <div className='aboutKstar__card-info'>
                            <div>
                                <SectionSubtitle style={{ margin: 0, fontSize: '25px' }}>{el.title}</SectionSubtitle>
                                <p className='aboutKstar__card-text'>{el.subtitle}</p>
                            </div>
                            <p className='aboutKstar__card-description'>{el.description}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export default AboutKstar;