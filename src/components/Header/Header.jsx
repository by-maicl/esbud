import { Link, NavLink, useLocation } from 'react-router';
import { useEffect, useState } from 'react';

import './Header.scss';

import Button from '../../components/Button/Button.jsx';
import logo from '../../assets/logo.png';

import { ChevronDown } from 'lucide-react';

function Header() {
    const location = useLocation();

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

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <Link to="/" className="header__logo">
                <img src={logo} alt="Logo" className='header__logo-img' />
                Тов <br /> Енергосоларбуд
            </Link>

            <nav className="header__nav">
                <NavLink to="/" end>
                    Головна
                </NavLink>

                <div className="header__partners">
                    <div
                        className={`header__partners-title ${isPartnerPage ? 'active' : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        Партнери
                        <span className={`header__partners-arrow ${isOpen ? 'active' : ''}`}>
                            <ChevronDown size={15} />
                        </span>
                    </div>

                    <div className={`header__partners-dropdown ${isOpen ? 'open' : ''}`}>
                        <NavLink
                            to="/kstar"
                            className="header__partners-link"
                            onClick={() => setIsOpen(false)}
                        >
                            Kstar
                        </NavLink>

                        <NavLink
                            to="/growatt"
                            className="header__partners-link"
                            onClick={() => setIsOpen(false)}
                        >
                            Growatt
                        </NavLink>
                    </div>
                </div>

                <NavLink to="/modular-houses">
                    Модульні будинки
                </NavLink>

                <Link to="/#aboutUs">
                    Про нас
                </Link>

                <Link to="/#services">
                    Послуги
                </Link>
            </nav>

            <Button style={{ padding: '0 12px 0 20px' }}>Зв'язатися</Button>
        </header>
    );
}

export default Header;