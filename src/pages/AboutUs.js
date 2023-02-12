import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

// import { FaMagic, FaHardHat, FaTruckLoading, FaWaveSquare, FaShippingFast } from "react-icons/fa";
// import Title from "../components/Title";
import Values from "../components/Values";
import logo from '../images/logotipo.svg';
export default class AboutUs extends Component {
    // FaHandshake
    
    // Scroll top window
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    state = {
        services: [
            {
                info: 
                    "Somos especialistas en armado e instalación de muebles prefabricados, RTA, de melanina, entre otros. Cumplimos los requerimientos de nuestros clientes de manera rápida, segura y confiable. Tenemos en cuenta que cada servicio es una posibilidad de progreso mutuo, es por ello que nos esforzamos día a día por entregar servicios de calidad con una gestión profesional y adecuada a las necesidades de cada cliente. Somos un equipo innovador, dinámico; estamos en constante búsqueda, implementación y ejecución de nuevas formas de soluciones, con el fin de mejorar la satisfacción de nuestros clientes en cada servicio que entregamos. Somos el socio ideal en brindar soluciones integrales a tus necesidades; con responsabilidad, calidad y seguridad.",
                district: "Huancayo",
                name: "Chambits",
                type: "Trabajo",
                speciality: "Trabajo",
                experience: "3",
                home: true,
                workshop: true,
                logo: logo,
                values: [
                    {
                        title: "Responsabilidad",
                        info: "Hola"
                    },
                    {
                        title: "Compromiso",
                        info: "Hola"
                    },
                    {
                        title: "Pasión",
                        info: "Hola"
                    }
                ],
                extras: [
                    {
                        position: "1",
                        info: "Brindar productos y servicios que logren satisfacer las necesidades de nuestros clientes."
                    },
                    {
                        position: "2",
                        info: "Mejora continua de nuestros procesos y desempeño, alineados a nuestros objetivos."
                    },
                    {
                        position: "3",
                        info: "Asegurar un ambiente de trato cordial, seguro y saludable con nuestros clientes."
                    },
                    {
                        position: "4",
                        info: "Capacitación, desarrollo personal y profesional para brindar un mejor servicio."
                    },
                    {
                        position: "5",
                        info: "Asegurar la atención activa, dedicada e inmediata a nuestros clientes."
                    }  
                ]
            }
        ]
    };

    
    render() {
        const services = this.state.services.map((item, i) => 
            <div key={i} className="about-us-logo">
                <img src={item.logo} alt={i}/>
            </div>
        );
        const info = this.state.services.map((item, i) => 
            <p key={i} >{item.info}</p>
        );
        const politic = this.state.services[0].extras.map((item, i) => 
            <li key={i}><h6 style={{display: "inline-flex", margin: "0"}}>{item.position}.</h6><span style={{marginLeft: "5px"}}>{item.info}</span></li>
        );
        return (
            <>
                <Hero hero="aboutUs">
                    <Banner title="¿Quiénes Somos?">
                        <Link to="/carpinteria" className="btn-primary">
                            servicios
                        </Link>
                    </Banner>
                </Hero>
                
        
                <section className="us">
                    <div className="us-container">
                        <div className="about-us">
                            <div className="about-us-container-logo">
                                {services}
                            </div>
                            <div className="about-us-container-info">
                                <div className="about-us-desc">
                                    {/* <h3>Detalles</h3> */}
                                    {info}
                                    {/* <div className="service" style={{ marginTop: "1em", textAlign:"center"}}>
                                        <span style={{ color: "white", margin: "0 1rem" }}><FaMagic /></span>
                                        <span style={{ color: "white", margin: "0 1rem" }}><FaHardHat /></span>
                                        <span style={{ color: "white", margin: "0 1rem" }}><FaShippingFast /></span>
                                        <span style={{ color: "white", margin: "0 1rem" }}><FaWaveSquare /></span>
                                    </div> */}
                                </div>
                            </div>
                            {/* <article className="about-us-info">
                                <h3>Info</h3>
                                <h6>Distrito : {item.district}</h6>
                                <h6>Nombres: {item.name}</h6>
                                <h6>Área: {item.type}</h6>
                                <h6>Especialista en: {item.speciality}</h6>
                                <h6>Experiencia : {item.experience} años</h6>
                                <h6>{item.home ? "Atención a domicilio" : ""}</h6>
                                <h6>{item.workshop && "Atención en taller"}</h6>
                            </article> */}
                        </div>
                    </div>
                </section>
                <Values />
                <section className="room-politic">
                    <h6>Nuestra Política</h6>
                    <ul className="extras-politic">
                        {politic}
                    </ul>
                </section>                
            </>
        );
    }
}
