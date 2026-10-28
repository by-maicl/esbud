import Hero from "./sections/HeroModular/HeroModular";
import StartModular from "./sections/StartModular/StartModular";
import FrameModular from "./sections/FrameModular/FrameModular";
import CatalogModular from "./sections/CatalogModular/CatalogModular";
import StagesModular from "./sections/StagesModular/StagesModular";
import FaqModular from "./sections/FaqModular/FaqModular";
import ContactSection from "../../components/ContactSection/ContactSection";

function ModularHouses() {
    return (
        <main>
            <Hero />
            <StartModular />
            <FrameModular />
            <CatalogModular />
            <StagesModular />
            <FaqModular />
            <ContactSection variant="secondary" />
        </main>
    );
}

export default ModularHouses;