import Hero from './sections/Hero/Hero.jsx';
import About from './sections/About/About.jsx';
import Services from './sections/Services/Services.jsx';
import System from './sections/System/System.jsx';
import Directions from './sections/Directions/Directions.jsx';
import Partners from './sections/Partners/Partners.jsx';
import Contacts from './sections/Contacts/Contacts.jsx';

function HomePage() {
    return (
        <main>
            <Hero />
            <About />
            <Services />
            <System />
            <Directions />
            <Partners />
            <Contacts />
        </main >
    );
}

export default HomePage;