import React from 'react';
import { Link } from "react-router-dom";
import { /*FaHeart, FaWhatsapp, FaWhatsappSquare, FaFacebook,*/ FaFacebookSquare, FaEnvelope } from 'react-icons/fa';
// import Pay from "../images/yape-plin.png";
import logo from '../images/logotipo.svg';

/*
const style = {
  textAlign: 'center'
}
*/
function Footer() {
  return(
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-content-logo">
            <img src={logo} alt={"Logo"}/>
          </div>
          <div className="footer-info" /*style={{fontSize: "32px", color: "#fff"}}*/>
            <div className="footer-contact">
              <ul className='footer-list'>
                {/* <li><a href="https://bit.ly/3WhUj1y" title="Escríbenos"><FaWhatsappSquare /></a></li> */}
                <li><a href="https://www.facebook.com/chambits01/" title="Síguenos en Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a></li>
                <li><Link to="/contacto" title="Contáctanos"><FaEnvelope /></Link></li>         
              </ul>
            </div>
            <div>
            <p>
              {/* De Huancayo con 
              <span> <FaHeart /> </span>
              para el mundo */}
              Chambits © 2023
            </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;