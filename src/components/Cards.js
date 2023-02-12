import React from "react";
// import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";

// import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { /*FaPoundSign,*/ FaWhatsapp, FaRulerCombined } from "react-icons/fa";

import Armario_01 from "../images/armario_1.png";
import Centro_01 from "../images/centro_1.png";
import Cocina_01 from "../images/cocina_1.png";
import ropero_lyon from "../images/ropero_lyon.png";
import ropero_cali from "../images/ropero_cali.png";
import comoda_cali from "../images/comoda_cali.png";

// import Logo from "../images/logo.png";

import "../css/styles-card.css";


const card = [
  {
    image: Armario_01,
    title_0: 'Armado',
    title: 'Ropero',
    info: {
        measures: '182 cm x 154 cm x 45 cm',
        details: [
          '6 Puertas',
          '2 Cajones',
        ]     
      },
    price: 'S/ 50.00',
    price_old: '56.90',
    message: '*Precio válido en el distrito de Huancayo.',
    button: 
      <a
        className="btn-primary-slider"
        // href="https://wa.me/51980895124?text=¡Buen%20día!%20Vengo%20de%20la%20de%20web.%20Quiero%20que%20arme%20mi%20ropero."
        href="https://bit.ly/3v36C5D"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textAlign: "center" }}
      >
        <FaWhatsapp className="styleWhatsapp" />
        Quiero el servicio
      </a>
  },
  {
    image: Centro_01,
    title_0: 'Armado',
    title: 'Centro de Entretenimento',
    info: {
        measures: '169 cm x 143.9 cm x 36.50 cm',
        details: [
          '2 Puertas',
          '1 Repisa'
        ]     
      },
    price: 'S/ 50.00',
    price_old: '56.90',
    message: '*Precio válido en el distrito de Huancayo.',
    button:
      <a
        className="btn-primary-slider"
        // href="https://wa.me/51980895124?text=¡Buen%20día!%20Vengo%20de%20la%20de%20web.%20Quiero%20que%20arme%20mi%20centro%20de%20entretenimiento."
        href="https://bit.ly/3YBQ1ne"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textAlign: "center" }}
      >
        <FaWhatsapp className="styleWhatsapp" />
        Quiero el servicio
      </a>
  },
  {
    image: Cocina_01,
    title_0: "Armado",
    title: 'Mueble de Cocina',
    info: {
        measures: '198 cm x 180 cm x 38.8 cm',
        details: [
          '3 Cajones',
          '5 Puertas'
        ]
      },
    price: 'S/ 80.00',
    price_old: '89.90',
    message: '*Precio válido en el distrito de Huancayo.',
    button:
      <a
        className="btn-primary-slider"
        // href="https://wa.me/51980895124?text=¡Buen%20día!%20Vengo%20de%20la%20de%20web.%20Quiero%20que%20arme%20mi%20mueble%20de%20cocina."
        href="https://bit.ly/3Vboaat"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textAlign: "center" }}
      >
        <FaWhatsapp className="styleWhatsapp" />
        Quiero el servicio
      </a>
  },
  {
    image: ropero_lyon,
    title_0: "Armado",
    title: 'Ropero Lyon',
    info: {
        measures: '166 cm x 182 cm x 45 cm',
        details: [
          '2 Cajones',
          '6 Puertas'
        ]      
      },
    price: 'S/ 80.00',
    price_old: '89.90',
    message: '*Precio válido en el distrito de Huancayo.',
    button:
      <a
        className="btn-primary-slider"
        // href="https://wa.me/51980895124?text=¡Buen%20día!%20Vengo%20de%20la%20de%20web.%20Quiero%20que%20arme%20mi%20ropero."
        href="https://bit.ly/3BMR0af"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textAlign: "center" }}
      >
        <FaWhatsapp className="styleWhatsapp" />
        Quiero el servicio
      </a>
  },
  {
    image: ropero_cali,
    title_0: "Armado",
    title: 'Ropero Cali',
    info: {
        measures: '103 cm x 182 cm x 45 cm',
        details: [
          '2 Cajones',
          '4 Puertas',
        ]
    },
    price: 'S/ 50.00',
    price_old: '56.90',
    message: '*Precio válido en el distrito de Huancayo.',
    button:
      <a
        className="btn-primary-slider"
        // href="https://wa.me/51980895124?text=¡Buen%20día!%20Vengo%20de%20la%20de%20web.%20Quiero%20que%20arme%20mi%20ropero."
        href="https://bit.ly/3HISA0G"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textAlign: "center" }}
      >
        <FaWhatsapp className="styleWhatsapp" />
        Quiero el servicio
      </a>
  },
  {
    image: comoda_cali,
    title_0: "Armado",
    title: 'Cómoda Cali',
    info: {
        measures: '62 cm x 91 cm x 40 cm',     
        details: [
        '4 Cajones',
        '0 Puertas'
        ]     
    },
    price: 'S/ 50.00',
    price_old: '56.90',
    message: '*Precio válido en el distrito de Huancayo.',
    button:
      <a
        className="btn-primary-slider"
        // href="https://wa.me/51980895124?text=Pedido%20de%20Servicio%20de%20armado%20de%20mueble:%20Hola.%20Quiero%20que%20arme%20mi%20cómoda."
        // href="https://wa.me/51980895124?text=¡Buen%20día!%20Vengo%20de%20la%20de%20web.%20Quiero%20que%20arme%20mi%20cómoda."
        href="https://bit.ly/3Vb0fru"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textAlign: "center" }}
      >
        <FaWhatsapp className="styleWhatsapp" />
        Quiero el servicio
      </a>
  }
];

function Cards() {
  return (
    <section className="cards">
      <div className="cards-overlay"></div>
      <div className="title">
        <h4>Armado de Muebles</h4>
        {/* <div className="logCom"><img src={Logo} className="log" /></div> */}
        <div></div>
        <span className="content-atention">
          <span className="atention">🔥Atención: Lun-Sab de 08:00-17:00 horas </span>
        </span>
      </div>
      <div className="App">
        {card.map(item => {
          return (
            <article key={`item-${item.title}`}>
              <Card className="card"> {/*Card className={classes.card}*/}
                <CardMedia className="media" image={item.image} style={{margin: "10px auto"}} /> {/*CardMedia className={classes.media}*/}
                <CardContent className="content" style={{borderTop: "1px solid #eae6e6"}}> {/*CardContent className={classes.content}*/}
                  <div style={{width:"fit-content", backgroundColor: "green", borderRadius: ".3rem"}}>
                  <Typography style={{color: "#fff", marginBottom: "0", fontWeight: 400, padding: ".1rem .3rem"}} className={"MuiTypography--heading"} variant={"subtitle2"} gutterBottom>
                    { item.title_0 }
                  </Typography>  
                  </div>
                  <Typography className={'MuiTypography--heading'} variant={'h6'} gutterBottom>
                    {item.title}
                  </Typography>
                  
                  {/* Problem solution start */}
                  <Typography className={'MuiTypography--heading'} variant={'subtitle2'} gutterBottom>
                    <FaRulerCombined className="styleRuler" />{item.info.measures}
                    {(item.info.details).map((item, i) =>(
                      <ul className="ListCard" key={i}>
                        <li>{item}</li>
                      </ul>
                    ))}
                  </Typography>
                  {/* Problem solution end */}

                  <Typography className={"MuiTypography--subheading"} variant={"subtitle2"} gutterBottom>
                    <p style={{ marginTop: "0.5em", marginBottom: "0" }}>
                      Desde: {item.price}                      
                    </p>
                    {(item.price_old !== '')
                       ?
                      <span>
                        <em style={{fontSize: "17px", color: "red", fontWeight: "400", fontStyle: "normal"}}>Precio Regular: S/ </em>
                        <span className="price_old">
                          {item.price_old}
                        </span>
                      </span>
                      :
                      ''
                    }
                  </Typography>
                  <span style={{fontSize:"11px", color: "#999999"}}>{item.message}</span>
                  <Divider className="divider" style={{margin: "24px 0"}} light />
                  <div style={{textAlign: "center"}}>
                    {item.button}
                  </div>
                </CardContent>
              </Card>
            </article>
          );
        })}
      </div>
    </section>
    
  );
}

// const Cards = withStyles(styles)(App);

// const root = createRoot(document.getElementById("root"));
// root.render(<Cards />);

export default Cards;