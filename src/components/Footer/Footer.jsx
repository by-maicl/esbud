import { NavLink,Link } from 'react-router';


import './Footer.scss';

import logo from '../../assets/logo-white.png';
import instagramIcon from '../../assets/social/instagram.png';
import facebookIcon from '../../assets/social/facebook.png';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className='footer'>
            <div className='footer__grid'>
                {/* 1. Блок компании и соцсетей */}
                <div className='footer__company'>
                    <div className='footer__company-grid'>
                        <div className='footer__logo'>
                            <img src={logo} alt="Logo" />
                        </div>
                        <div>
                            <h2>ТОВ «Енергосоларбуд»</h2>
                            <p>Енергія + Простір</p>
                        </div>
                    </div>

                    <div className='footer__social'>
                        <a 
                            href='https://www.instagram.com/karkas.house.ua' 
                            target='_blank' 
                            rel="noreferrer" 
                            className='footer__social-icon'
                            aria-label="Instagram"
                        >
                            <img src={instagramIcon} alt="Instagram" />
                        </a>
                        <a 
                            href='https://www.facebook.com/karkas.house.ua' 
                            target='_blank' 
                            rel="noreferrer" 
                            className='footer__social-icon'
                            aria-label="Facebook"
                        >
                            <img src={facebookIcon} alt="Facebook" />
                        </a>
                       
                    </div>
                </div>

                {/* 2. Навигация */}
                <div className='footer__element'>
                    <h3 className='footer__title'>Навігація</h3>
                    <NavLink to="/" end onClick={scrollToTop}>Головна</NavLink>
                    <NavLink to="/kstar" onClick={scrollToTop}>Партнери</NavLink>
                    <NavLink to="/modular-houses" onClick={scrollToTop}>Модульні будинки</NavLink>
                    <Link to="/#aboutUs">Про нас</Link>
                    <Link to="/#services">Послуги</Link>

                </div>

                {/* 3. Направления */}
                <div className='footer__element'>
                    <h3 className='footer__title'>Напрями</h3>
                    <NavLink to="/modular-houses" onClick={scrollToTop}>Модульні будинки</NavLink>
                    <NavLink to="/kstar" onClick={scrollToTop}>Сонячні системи</NavLink>
                </div>

                {/* 4. Контакты */}
                <div className='footer__element'>
                    <h3 className='footer__title'>Контакти</h3>
                    <a href="tel:+380635982191">+38 063 598 2191</a>
                    <a href="mailto:tovesb.info@gmail.com">tovesb.info@gmail.com</a>
                    <a 
                        href="https://maps.app.goo.gl/dYJEKFaSpgqecXro6" 
                        target='_blank' 
                        rel="noreferrer"
                    >
                        Україна м. Київ вул. Андрія Верхогляда, буд. 4, прим.122
                    </a>
                </div>
            </div>

            <h2 className='footer__company-name'>
                ТОВ <br className="footer__br-mobile" />
                «Енергосоларбуд»
            </h2>

            <div className='footer__subtext'>
                <p>© 2026 ТОВ «Енергосоларбуд». Усі права захищено.</p>
                <p>Інформація на сайті має ознайомчий характер.</p>
            </div>
        </footer>
    );
}

export default Footer;