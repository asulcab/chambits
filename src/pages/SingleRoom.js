import React, { Component } from "react";
// Component Card
import defaultBcg from "../images/furniture.jpeg";
// import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
// import { FaWhatsapp } from "react-icons/fa";

import LogoStores from "../components/LogoStores";
import Accordion from "../components/Accordion";
import withRouter from "../components/withRouter";
import Error from "../pages/Error";

import StyledHero from "../components/StyledHero";

// Style Card
import "../css/styles-card.css";

class SingleRoom extends Component {

  // Scroll top window
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      // slug: this.props.match.params.slug,
      slug: this.props.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RoomContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    // const params = this.state.slug;
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    // console.log(RoomContext)

    if (!room) {
      return (
        // <div className="error">
        //   <h3> no such room could be found...</h3>
        //   <Link to="/rooms" className="btn-primary">
        //     back to rooms
        //   </Link>
        // </div>
        <Error />
      );
    }
    const {
      // active,
      name,
      district,
      type,
      speciality,
      // image_header,
      experience,
      home,
      workshop,
      contact,
      proyects,
      titleDescription,
      description,
      titleDescription02,
      description02,
      // capacity,
      // size,
      extras,
      images,
      // imagesS,

      // Card define
      // card,
      // logo,
      // atention,
      // price_delivery
    } = room;
    const [main, ...defaultImages ] = images;
    // const [...imagesSponsor] = imagesS;

    return (
      <>
        {/* Cabecera */}
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${speciality}`}>
            <Link to="/proyectos" className="btn-primary">
              Proyectos
            </Link>
          </Banner>
        </StyledHero>

        {/* Card */}
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              {(titleDescription !== '') ? <h3>{titleDescription}</h3> : <h3>Detalles</h3>}
              <p>{description}</p>
              {(titleDescription02 !== '') ? <h6 style={{marginTop: "1em"}}>{titleDescription02}</h6> : ""}
              <p>{description02}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              {(name !== '')?<h6><span>Nombres:</span>{name}</h6>:''}
              <h6><span>Área:</span>{type}</h6>
              {(experience > 0) ? <h6><span>Experiencia:</span>{experience} años</h6> : ''}
              <h6><span>Especialdad:</span>{speciality}</h6>
              {/* <h6>Tamaño : {size} SQFT</h6> */}
              {/*
              <h6>
                capacidad max :
                {capacity > 1 ? `${capacity} personas` : `${capacity} persona`}
              </h6>
              */}
              <h6><span>Cobertura:</span>{district}</h6>
              <h6 style={{fontWeight: "600"}}>{home ? "Atención a domicilio (previa coordinación)" : ""}</h6>
              <h6>{workshop && "Atención en taller"}</h6>
              <div style={{textAlign: "left", marginTop: "1em"}}>
              {(proyects !== '')
                ?
                  <div>
                    {proyects}
                  </div>
                :
                  ''
              }
              </div>
              <div style={{textAlign: "left", marginTop: "1em"}}>
              {(contact !== '')
                ?
                  <div>
                    {contact}
                  </div>  
                :
                 ''
              }
              </div>
            </article>
          </div>          
        </section>
        {/* End Section Card */}

        
        
        {/* Extras */}
        <section className="room-extras">
          <div>
            <h6>Extras </h6>
            <ul className="extras">
              {extras.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
              {/* {console.log(extras.map((item, index) => (
                {item}
              )))} */}
              {/* {console.log({room})} */}
            </ul>
          </div>
        </section>

        {/* Logos Tiendas */}
        {/* <section>
          {(imagesS != '')
            ?
            <div className="single-room-images" style={{padding:"2rem 0", borderTop: "1px solid", borderColor: "rgb(0, 0, 0, 0.08)", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", columnGap: "2rem"}}>
            {imagesSponsor.map((item, index) => (
                <img key={index} src={item} alt={name} />
              ))}
            </div>
            :
            ''
          }
        </section> */}

        {/* Logos Tiendas */}
        <section>
          <LogoStores />
        </section>

        {/* Condiciones */}
        <section style={{backgroundColor: '#ededed', padding: '2em 0'}}>
          <Accordion />
        </section>
      </>
    );
  }
}
export default withRouter(SingleRoom);
