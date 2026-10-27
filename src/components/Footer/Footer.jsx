import { Link, NavLink } from 'react-router';

import './Footer.scss';

import logo from '../../assets/logo-white.png';

import instagramIcon from '../../assets/social/instagram.png';
import facebookIcon from '../../assets/social/facebook.png';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__grid'>

                <div className='footer__company'>
                    <div className='footer__company-grid'>
                        <div className='footer__logo'>
                            <img src={logo} alt="Logo" />
                        </div>
                        <div>
                            <h2>ТОВ «Енергосоларбуд»</h2>
                            <p>Енергія та Простір</p>
                        </div>
                    </div>

                    <div className='footer__social'>
                        <a href='https://www.instagram.com/karkas.house.ua' target='_blank' className='footer__social-icon'>
                            <img src={instagramIcon} alt="Instagram" />
                        </a>
                        <a href='https://www.facebook.com/karkas.house.ua' target='_blank' className='footer__social-icon'>
                            <img src={facebookIcon} alt="Facebook" />
                        </a>
                    </div>
                </div>

                <div className='footer__element'>
                    <h3 className='footer__title'>Навігація</h3>
                    <NavLink to="/" end>Головна</NavLink>
                    <NavLink to="/kstar">Партнери</NavLink>
                    <NavLink to="/modular-houses">Модульні будинки</NavLink>
                    <NavLink to="/abc" end>Про нас</NavLink>
                    <NavLink to="/abc" end>Послуги</NavLink>
                </div>

                <div className='footer__element'>
                    <h3 className='footer__title'>Напрями</h3>
                    <NavLink to="/modular-houses" end>Модульні будинки</NavLink>
                    <NavLink to="/kstar" end>Сонячні системи</NavLink>
                </div>

                <div className='footer__element'>
                    <h3 className='footer__title'>Контакти</h3>
                    <a href="tel:+380635982191">+38 063 598 2191</a>
                    <a href="mailto:tovesb.info@gmail.com">tovesb.info@gmail.com</a>
                    <a href="https://maps.app.goo.gl/dYJEKFaSpgqecXro6" target='_blank'>Україна м. Київ вул. Андрія Верхогляда, буд. 4, прим.122</a>
                </div>
            </div>

            <h2 className='footer__company-name'>ТОВ «Енергосоларбуд»</h2>

            <div className='footer__subtext'>
                <p>© 2026 ТОВ «Енергосоларбуд». Усі права захищено.</p>
                <p>Інформація на сайті має ознайомчий характер.</p>
            </div>
        </footer>
    )
}

export default Footer;