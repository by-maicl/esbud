import './PartnersSwitch.scss';

import { NavLink } from 'react-router';

function PartnersSwitch({
    variant = 'kstar',
}) {
    const partnersClasses = [
        'partnersSwitch',
        `partnersSwitch--${variant}`,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <section className={partnersClasses}>
            <nav className='partnersSwitch__nav'>
                <NavLink to='/kstar' className='partnersSwitch__element--kstar'>Kstar</NavLink>
                <NavLink to='/growatt' className='partnersSwitch__element--growatt'>Growatt</NavLink>
            </nav>
        </section>
    );
}

export default PartnersSwitch;