import './About.scss';

import houseAboutSection from '../../../../assets/home-img/about/house.jpg';
import roofAboutSection from '../../../../assets/home-img/about/roof.jpg';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import SectionSubtitle from '../../../../components/SectionSubtitle/SectionSubtitle';
import SectionAside from '../../../../components/SectionAside/SectionAside';
import Reveal from '../../../../components/Reveal/Reveal';

function About() {
    return (
        <section className='about' id='aboutUs'>
            <Reveal>
                <div className="about__left">
                    <SectionTitle>Про нас</SectionTitle>
                    <SectionSubtitle>Будуємо зв’язок між архітектурою та енергетикою</SectionSubtitle>
                    <div className='about__img'>
                        <img src={roofAboutSection} alt="Solar panels" />
                        <img src={houseAboutSection} alt="Modal house" />
                    </div>
                </div>
            </Reveal>

            <Reveal delay={300}>
                <div className="about__right">
                    <SectionAside className='about__company-name'>ТОВ «Енергосоларбуд»</SectionAside>
                    <div className='about__info-text'>
                        <h4>Не окремі елементи, а узгоджена інфраструктура.</h4>
                        <p>Ми створюємо комфортне, надійне та енергоефективне житло, яке відповідає сучасним
                            стандартам якості та дизайну.</p>
                        <p>Наші будинки виготовляються з використанням міцних металевих, дерев’яних або змішаних
                            (металево-дерев’яних) каркасів. Каркаси наших будинків забезпечують довговічність конструкцій
                            та стійкість до зовнішніх впливів.</p>
                        <p>Ми пропонуємо українському ринку обладнання для відновлюваної енергетики.
                            ТОВ «ЕНЕРГОСОЛАРБУД» є офіційним представником провідного світового китайського виробника GROWATT,
                            та офіційним дистриб’ютором великої міжнародної китайської компанії KSTAR
                            (Shenzhen KSTAR NEW ENERGY Co, Ltd).</p>
                    </div>
                </div>
            </Reveal>
        </section >
    );
}

export default About;