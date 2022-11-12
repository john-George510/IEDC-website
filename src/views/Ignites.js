import Hero from "../components/ignites/Hero";
import Background from '../components/layout/partials/Background'
import Gallery from "../components/ignites/Gallery";
import Details from "../components/ignites/Details";
import Events from "../components/ignites/Events";

const Ignites = () => {
    return (
        <>
            <Hero className="illustration-section-01" />
            <Details invertMobile
                imageFill
                className="illustration-section-02"
            />
            <Events />
            <Gallery />
            <Background className='-z-10' />
        </>
    );
};

export default Ignites;