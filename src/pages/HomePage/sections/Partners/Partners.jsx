import './Partners.scss';

import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

import growattLogo from '../../../../assets/home-img/partners/Growatt_logo.png';
import kstarLogo from '../../../../assets/home-img/partners/kstar-logo.png';

function Partners() {
    return (
        <section className='partners'>
            <SectionTitle color='#FFF'>Наші партнери</SectionTitle>
            <div className='partners__wrapp'>
                <img src={growattLogo} alt="Growatt" />
                <img src={kstarLogo} alt="Kstar" />
            </div>
        </section>
    );
}

export default Partners;