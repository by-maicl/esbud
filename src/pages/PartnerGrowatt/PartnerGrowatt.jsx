import Hero from "./sections/HeroGrowatt/HeroGrowatt";
import PartnersSwitch from "../../components/PartnersSwitch/PartnersSwitch";
import AboutGrowatt from "./sections/AboutGrowatt/AboutGrowatt";
import DirectionsGrowatt from "./sections/DirectionsGrowatt/DirectionsGrowatt";
import WhyGrowatt from "./sections/WhyGrowatt/WhyGrowatt";
import ProductsGrowatt from "./sections/ProductsGrowatt/ProductsGrowatt";
import RewardGrowatt from "./sections/RewardGrowatt/RewardGrowatt";
import ContactSection from "../../components/ContactSection/ContactSection"; 

function PartnerGrowatt() {
    return (
        <main>
            <Hero />
            <PartnersSwitch />
            <AboutGrowatt />
            <DirectionsGrowatt />
            <WhyGrowatt />
            <ProductsGrowatt />
            <RewardGrowatt />
            <ContactSection variant="growatt" />
        </main>
    );
}

export default PartnerGrowatt;