import HeroKstar from "./sections/HeroKstar/HeroKstar";
import PartnersSwitch from "../../components/PartnersSwitch/PartnersSwitch";
import AboutKstar from "./sections/AboutKstar/AboutKstar";
import WhyKstar from "./sections/WhyKstar/WhyKstar";
import SecurityKstar from "./sections/SecurityKstar/SecurityKstar";
import SolutionKstar from "./sections/SolutionKstar/SolutionKstar";
import ProjectsKstar from "./sections/ProjectsKstar/ProjectsKstar";
import ContactSection from "../../components/ContactSection/ContactSection";

function PartnerKstar() {
    return (
        <main>
            <HeroKstar />
            <PartnersSwitch />
            <AboutKstar />
            <WhyKstar />
            <SecurityKstar />
            <SolutionKstar />
            <ProjectsKstar />
            <ContactSection />
        </main>
    );
}

export default PartnerKstar;