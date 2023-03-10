import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { /*FaAlignRight, FaMotorcycle, FaPizzaSlice, FaUtensils, FaTools, FaPencilRuler,*/ FaCubes } from "react-icons/fa";
import Contact from "./Contact";
import logo from "../images/logo.svg";
import BurguerButton from "./BurguerButton";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Chambits" />
            </Link>
            {/* <button
              type="button"
              id="nav-btn"
              onClick={this.handleToggle}
            >
              {console.log(this.handleToggle)}
              <FaAlignRight className="nav-icon" />
            </button> */}
            <div className="burguer">
              <BurguerButton clicked={ this.state.isOpen } handleClick={ this.handleToggle } />
            </div>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              {/* <Link to="/#">Inicio</Link> */}
            </li>
            <li>
              <Link onClick={ this.handleToggle } to="/nosotros">Nosotros</Link>
            </li>
            {/* <li>
              <Link to="/rooms/carpinteria">Servicio</Link>
            </li> */}
            <li>
              <Link onClick={ this.handleToggle } to="/carpinteria">Servicio</Link>
            </li>
            {/* <li>
              <Link to="/rooms">Especialistas</Link>
            </li> */}
            <li>
              <Link onClick={ this.handleToggle } to="/proyectos" style={{ color: "#ffd800" }}><FaCubes className="nav-icon-delivery" />Proyectos</Link>
            </li>
            <li>
              <Link onClick={ this.handleToggle } to="/contacto" style={{ color: "#ffd800" }}>Contacto</Link>
            </li>
            {/* <li>
              <Link to="/food-delivery" style={{ color: "#ffd800" }}><FaUtensils className="nav-icon-delivery" />Delivery Food!</Link>
            </li> */}
          </ul>
          <Contact />
        </div>
      </nav>
          <BgDiv className={`initial ${this.state.isOpen ? 'active' : ''}`}></BgDiv>
      
          </>
    );
  }
}

const BgDiv = styled.div`
  background-color: rgb(2, 44, 67, .7);/*rgb(28, 54, 67, .9)*/
  position: absolute;
  width: 100%;
  height: 100%;
  /*z-index: 1;*/
  opacity: 0;
  transition: all .6s ease ;
  @media(min-width: 768px){
    display: none;
  }
  
  &.active{
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: .7;
    position: fixed;
  }
`
