import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { Menu, X, Plus, Minus, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

import './Header.scss';

import Button from '../../components/Button/Button.jsx';
import logo from '../../assets/logo.png';
import './Header.scss';

function Header() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPartnersOpen, setIsPartnersOpen] = useState(false);
    const [lang, setLang] = useState('UA');

    // Закрываем меню при смене маршрута
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    // Блокируем скролл страницы при открытом меню
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
                    ТОВ <br /> ЕНЕРГОСОЛАРБУД
                </span>
            </Link>

            {/* Десктопная навигация */}
            <nav className="header__nav">
                <NavLink to="/" end>
                    Головна
                </NavLink>

                <div className="header__partners">
                    <div
                        className={`header__partners-title ${isPartnerPage ? 'active' : ''}`}
                        onClick={() => setIsPartnersOpen(!isPartnersOpen)}
                    >
                        Партнери
                        <span className={`header__partners-arrow ${isPartnersOpen ? 'active' : ''}`}>
                            ▼
                        </span>
                    </div>

                    <div className={`header__partners-dropdown ${isPartnersOpen ? 'open' : ''}`}>
                        <NavLink
                            to="/growatt"
                            className="header__partners-link"
                            onClick={() => setIsPartnersOpen(false)}
                        >
                            Growatt
                        </NavLink>
                        <NavLink
                            to="/kstar"
                            className="header__partners-link"
                            onClick={() => setIsPartnersOpen(false)}
                        >
                            Kstar
                        </NavLink>
                    </div>
                </div>

                <NavLink to="/modular-houses">Модульні будинки</NavLink>
                <NavLink to="/about">Про нас</NavLink>
                <NavLink to="/services">Послуги</NavLink>
                <NavLink to="/projects">Проєкти</NavLink>
            </nav>

            <div className="header__desktop-btn">
                <Button style={{ padding: '0 12px 0 20px' }}>Зв'язатися</Button>
            </div>

            {/* Кнопка открытия мобильного меню */}
            <button
                type="button"
                className="header__burger-btn"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Відкрити меню"
            >
                <Menu size={28} />
            </button>

            {/* Оверлей для закрытия по клику вне панели */}
            <div
                className={`header__overlay ${isMenuOpen ? 'open' : ''}`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Мобильное всплывающее меню / сайдбар */}
            <div className={`header__mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="header__mobile-top">
                    <button
                        type="button"
                        className="header__close-btn"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Закрити меню"
                    >
                        <X size={26} />
                    </button>
                </div>

                <div className="header__mobile-list">
                    {/* Аккордеон Партнери */}
                    <div className="header__mobile-item-group">
                        <div
                            className="header__mobile-item header__mobile-item--accordion"
                            onClick={() => setIsPartnersOpen(!isPartnersOpen)}
                        >
                            <span>Партнери</span>
                            {isPartnersOpen ? <Minus size={18} /> : <Plus size={18} />}
                        </div>
                        {isPartnersOpen && (
                            <div className="header__mobile-sublist">
                                <NavLink to="/growatt" className="header__mobile-sublink">
                                    Growatt
                                </NavLink>
                                <NavLink to="/kstar" className="header__mobile-sublink">
                                    Kstar
                                </NavLink>
                            </div>
                        )}
                    </div>

                    <NavLink to="/modular-houses" className="header__mobile-item">
                        Модульні будинки
                    </NavLink>

                    <NavLink to="/about" className="header__mobile-item">
                        Про нас
                    </NavLink>
                <Link to="/#aboutUs">
                    Про нас
                </Link>

                    <NavLink to="/services" className="header__mobile-item">
                        Послуги
                    </NavLink>

                    <NavLink to="/projects" className="header__mobile-item">
                        Проєкти
                    </NavLink>
                </div>

                {/* Переключатель языков */}
                <div className="header__mobile-lang">
                    <button
                        type="button"
                        className={`header__lang-btn ${lang === 'UA' ? 'active' : ''}`}
                        onClick={() => setLang('UA')}
                    >
                        UA
                    </button>
                    <button
                        type="button"
                        className={`header__lang-btn ${lang === 'EN' ? 'active' : ''}`}
                        onClick={() => setLang('EN')}
                    >
                        EN
                    </button>
                </div>

                {/* Кнопка действия */}
                <button type="button" className="header__mobile-action-btn">
                    <span>Зв'язатися</span>
                    <span className="header__action-circle">
                        <ArrowRight size={16} />
                    </span>
                </button>
            </div>
                <Link to="/#services">
                    Послуги
                </Link>
            </nav>

            <Button style={{ padding: '0 12px 0 20px' }}>Зв'язатися</Button>
        </header>
    );
}

export default Header;