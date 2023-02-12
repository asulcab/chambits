import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup, /*useMap , CircleMarker*/ } from "react-leaflet";
// import { icon } from "leaflet";
import './index.css';


const Contact = () =>{
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_du1vqzm', 'template_u7pnb4l', refForm.current, 'IJPxFl8WJ12neE8uk')
      .then(
        () => {
          alert('¡Mensaje enviado con exito!')
          window.location.reload(false)
        },
        () => {
          alert('No se pudo enviar el mensaje, intente nuevamente')
        }
      )
  }

  /*
  const ICON = icon({
    iconUrl: "/marker-icon.png",
    iconSize: [25, 41],
  })
  */

  const position = [-12.06798, -75.21017];
  return (
    <>
      <div className="contact-page">
        <div className="container-form">
          <h1>Contáctanos</h1>
          <p>
          Si tiene alguna otra solicitud o pregunta, no dude en ponerse en contacto con nosotros utilizando el siguiente formulario 😃
            </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Nombre" required />
                </li>
                <li className="half">
                  <input type="email" name="email" placeholder="Email" required />
                </li>
                <li>
                  <input placeholder="Asunto" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder="Mensaje" name="message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="ENVIAR" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          <p>
          🛠️ Especialistas en armado e instalación de muebles.
          </p>
          {/* <br /> */}
          Huancayo
          <br />
          <span>chambits01@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={position} zoom={26} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} >
              <Popup>🛠️ Chambits: especialistas en armado de muebles de melamina.</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Contact;