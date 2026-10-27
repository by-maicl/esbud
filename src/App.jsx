import { Routes, Route } from 'react-router';

import MainLayout from './layouts/MainLayout/MainLayout.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import PartnerKstar from './pages/PartnerKstar/PartnerKstar.jsx';
import PartnerGrowatt from './pages/PartnerGrowatt/PartnerGrowatt.jsx';
// import ModularHouses from './pages/ModularHouses/ModularHouses.jsx';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/kstar" element={<PartnerKstar />} />
        <Route path="/growatt" element={<PartnerGrowatt />} />
        {/* <Route path="/modular-houses" element={<ModularHouses />} />
        <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;