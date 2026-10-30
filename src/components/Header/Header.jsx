import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { Menu, X, Plus, Minus, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import Button from '../../components/Button/Button.jsx';
import logo from '../../assets/logo.png';
import './Header.scss';

import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';

function Header() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPartnersOpen, setIsPartnersOpen] = useState(false);

    const { t, i18n } = useTranslation();
    const lang = i18n.resolvedLanguage?.startsWith('en') ? 'EN' : 'UA';

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    useEffect(() => {
        if (!location.hash) return;

        const targetId = decodeURIComponent(location.hash.slice(1));

        requestAnimationFrame(() => {
            document.getElementById(targetId)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
    }, [location.pathname, location.hash]);

    const isPartnerPage = ['/kstar', '/growatt'].some(
        (path) =>
            location.pathname === path ||
            location.pathname.startsWith(`${path}/`)
    );

    return (
        <header className="header">
            <Link to="/" className="header__logo">
                <img src={logo} alt="Logo" className="header__logo-img" />
                <span>
                    {t('header.companyPrefix')} <br /> {t('header.companyName')}
                </span>
            </Link>

            <nav className="header__nav">
                <NavLink to="/" end>
                    {t('header.home')}
                </NavLink>

                <div className="header__partners">
                    <div
                        className={`header__partners-title ${isPartnerPage ? 'active' : ''}`}
                        onClick={() => setIsPartnersOpen(!isPartnersOpen)}
                    >
                        {t('header.partners')}
                        <span className={`header__partners-arrow ${isPartnersOpen ? 'active' : ''}`}>
                            ▼
                        </span>
                    </div>

                    <div className={`header__partners-dropdown ${isPartnersOpen ? 'open' : ''}`}>
                        <NavLink
                            to="/kstar"
                            className="header__partners-link"
                            onClick={() => setIsPartnersOpen(false)}
                        >
                            Kstar
                        </NavLink>
                        <NavLink
                            to="/growatt"
                            className="header__partners-link"
                            onClick={() => setIsPartnersOpen(false)}
                        >
                            Growatt
                        </NavLink>
                    </div>
                </div>

                <NavLink to="/modular-houses">{t('header.modularHouses')}</NavLink>
                <Link to="/#aboutUs">{t('header.about')}</Link>
                <Link to="/#services">{t('header.services')}</Link>
            </nav>

            <div className="header__desktop-btn">
                <LanguageSwitcher />

                <Link to="/#contacts">
                    <Button style={{ padding: '6px 12px 6px 20px' }}>{t('header.contact')}</Button>
                </Link>
            </div>

            <button
                type="button"
                className="header__burger-btn"
                onClick={() => setIsMenuOpen(true)}
                aria-label={t('header.openMenu')}
            >
                <Menu size={28} />
            </button>

            <div
                className={`header__overlay ${isMenuOpen ? 'open' : ''}`}
                onClick={() => setIsMenuOpen(false)}
            />

            <div className={`header__mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="header__mobile-top">
                    <button
                        type="button"
                        className="header__close-btn"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label={t('header.closeMenu')}
                    >
                        <X size={26} />
                    </button>
                </div>

                <div className="header__mobile-list">
                    <div className="header__mobile-item-group">
                        <div
                            className="header__mobile-item header__mobile-item--accordion"
                            onClick={() => setIsPartnersOpen(!isPartnersOpen)}
                        >
                            <span>{t('header.partners')}</span>
                            {isPartnersOpen ? <Minus size={18} /> : <Plus size={18} />}
                        </div>
                        {isPartnersOpen && (
                            <div className="header__mobile-sublist">
                                <NavLink to="/kstar" className="header__mobile-sublink">
                                    Kstar
                                </NavLink>
                                <NavLink to="/growatt" className="header__mobile-sublink">
                                    Growatt
                                </NavLink>
                            </div>
                        )}
                    </div>

                    <NavLink to="/modular-houses" className="header__mobile-item">
                        {t('header.modularHouses')}
                    </NavLink>

                    <Link
                        onClick={() => setIsMenuOpen(false)}
                        to="/#aboutUs"
                        className="header__mobile-item">{t('header.about')}</Link>
                    <Link
                        onClick={() => setIsMenuOpen(false)}
                        to="/#services"
                        className="header__mobile-item">{t('header.services')}</Link>
                </div>

                <div className="header__mobile-lang">
                    <button
                        type="button"
                        className={`header__lang-btn ${lang === 'UA' ? 'active' : ''}`}
                        onClick={() => i18n.changeLanguage('uk')}
                    >
                        UA
                    </button>
                    <button
                        type="button"
                        className={`header__lang-btn ${lang === 'EN' ? 'active' : ''}`}
                        onClick={() => i18n.changeLanguage('en')}
                    >
                        EN
                    </button>
                </div>

                <div className="header__mobile-action-btn">
                    <Link
                        onClick={() => setIsMenuOpen(false)}
                        to="/#contacts">
                        <Button>{t('header.contact')}</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;