import React, { Component } from "react";
import { FaHandsHelping, FaHandshake, FaHeart } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  // FaHandshake
  
  state = {
    services: [
      {
        icon: <FaHandsHelping color='#ffd800' />,
        title: "Responsabilidad",
        info:
          "Asumimos el desafío de satisfacer a nuestros clientes, sintiéndonos capaces de lograrlo en tiempo, forma y calidad."
      },      
      {
        icon: <FaHandshake color='#ffd800' />,
        title: "Compromiso",        
        info:
          "Consideramos primordial el trabajo bien hecho, asumimos como propios los retos de nuestros clientes."
      },
      {
        icon: <FaHeart color='#ffd800'/>,
        title: "Pasión",
        info:
          "Nos entregamos en todo lo que hacemos, con esa fuerza interior implacable que sale del corazón y del alma."
      }
    ]
  };
  render() {
    return (
      <section className="values">
        <div className="values-background-overlay"></div>
        <Title title="Nuestros Valores" />
        <div className="values-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="value">
                <span>{item.icon}</span>
                <div>
                  <h6>{item.title}
                  <div></div>
                  {<br />}{item.title2}</h6>
                  <p>{item.info}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
