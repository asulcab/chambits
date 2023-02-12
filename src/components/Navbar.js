import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight, /*FaMotorcycle, FaPizzaSlice, FaUtensils, FaTools, FaPencilRuler,*/ FaCubes } from "react-icons/fa";
import logo from "../images/logo.svg";
import Contact from "./Contact";
export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Chambits" />
            </Link>
            <button
              type="button"
              id="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              {/* <Link to="/#">Inicio</Link> */}
            </li>
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            {/* <li>
              <Link to="/rooms/carpinteria">Servicio</Link>
            </li> */}
            <li>
              <Link to="/carpinteria">Servicio</Link>
            </li>
            {/* <li>
              <Link to="/rooms">Especialistas</Link>
            </li> */}
            <li>
              <Link to="/proyectos" style={{ color: "#ffd800" }}><FaCubes className="nav-icon-delivery" />Proyectos</Link>
            </li>
            <li>
              <Link to="/contacto" style={{ color: "#ffd800" }}>Contacto</Link>
            </li>
            {/* <li>
              <Link to="/food-delivery" style={{ color: "#ffd800" }}><FaUtensils className="nav-icon-delivery" />Delivery Food!</Link>
            </li> */}
          </ul>
          <Contact />
        </div>
      </nav>
    );
  }
}
