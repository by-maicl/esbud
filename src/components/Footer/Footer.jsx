import { NavLink,Link } from 'react-router';
import { useTranslation } from 'react-i18next';


import './Footer.scss';

import logo from '../../assets/logo-white.png';
import instagramIcon from '../../assets/social/instagram.png';
import facebookIcon from '../../assets/social/facebook.png';

function Footer() {
    const { t } = useTranslation();
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
                            <h2>{t('header.company')}</h2>
                            <p>{t('footer.tagline')}</p>
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

                <div className='footer__element'>
                    <h3 className='footer__title'>{t('footer.navigation')}</h3>
                    <NavLink to="/" end onClick={scrollToTop}>{t('header.home')}</NavLink>
                    <NavLink to="/kstar" onClick={scrollToTop}>{t('header.partners')}</NavLink>
                    <NavLink to="/modular-houses" onClick={scrollToTop}>{t('header.modularHouses')}</NavLink>
                    <Link to="/#aboutUs">{t('header.about')}</Link>
                    <Link to="/#services">{t('header.services')}</Link>

                </div>

                <div className='footer__element'>
                    <h3 className='footer__title'>{t('footer.directions')}</h3>
                    <NavLink to="/modular-houses" onClick={scrollToTop}>{t('header.modularHouses')}</NavLink>
                    <NavLink to="/kstar" onClick={scrollToTop}>{t('footer.solarSystems')}</NavLink>
                </div>

                <div className='footer__element'>
                    <h3 className='footer__title'>{t('footer.contacts')}</h3>
                    <a href="tel:+380635982191">+38 063 598 2191</a>
                    <a href="mailto:tovesb.info@gmail.com">tovesb.info@gmail.com</a>
                    <a 
                        href="https://maps.app.goo.gl/dYJEKFaSpgqecXro6" 
                        target='_blank' 
                        rel="noreferrer"
                    >
                        {t('footer.address')}
                    </a>
                </div>
            </div>

            <h2 className='footer__company-name'>
                {t('footer.companyPrefix')} <br className="footer__br-mobile" />
                {t('footer.companyName')}
            </h2>

            <div className='footer__subtext'>
                <p>{t('footer.copyright')}</p>
                <p>{t('footer.disclaimer')}</p>
            </div>
        </footer>
    );
}

export default Footer;