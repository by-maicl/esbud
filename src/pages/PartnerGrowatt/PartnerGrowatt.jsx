import Hero from "./sections/HeroGrowatt/HeroGrowatt";
import PartnersSwitch from "../../components/PartnersSwitch/PartnersSwitch";
import AboutGrowatt from "./sections/AboutGrowatt/AboutGrowatt";
import DirectionsGrowatt from "./sections/DirectionsGrowatt/DirectionsGrowatt";

function PartnerGrowatt() {
    return (
        <main>
            <Hero />
            <PartnersSwitch />
            <AboutGrowatt />
            <DirectionsGrowatt />
        </main>
    );
}

export default PartnerGrowatt;