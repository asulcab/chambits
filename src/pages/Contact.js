import React from "react";
import Hero from "../components/Hero";
import Contact from "../components/Contact/index";
import LogoStores from "../components/LogoStores";


const Contacto = () =>{

    // Scroll top window
    window.scrollTo(0, 0);
    
    return (
        <>
            <Hero hero="aboutUs">
                <Contact />
            </Hero>
            <LogoStores />
        </>
      );
};

export default Contacto;