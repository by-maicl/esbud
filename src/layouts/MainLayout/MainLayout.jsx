import { Outlet } from 'react-router';

import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import './MainLayout.scss';

function MainLayout() {
    return (
        <div className="main-layout">
            <Header />

            <main className="main-layout__content">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default MainLayout;