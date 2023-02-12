import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
// import RoomsContainer from "../components/RoomsContainer";
import Cards from "../components/Cards";
import LogoStores from "../components/LogoStores";
import Accordion from "../components/Accordion";

const Food = () => {

  // Scroll top window
  window.scrollTo(0, 0);
  
  return (
    <>
      <Hero hero="food">
        <Banner title="Servicios Hogar">
          <Link to="/carpinteria" className="btn-primary">
            Volver a Servicios
          </Link>
        </Banner>
      </Hero>
      <Cards />
      {/* <RoomsContainer /> */}
      <section>
        <LogoStores />
      </section>

      {/* Condiciones */}
      <section style={{backgroundColor: '#ededed', padding: '2em 0'}}>
        <Accordion />
      </section>
    </>
  );
};

export default Food;
