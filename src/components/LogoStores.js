import React from "react";
// import ReactDOM from "react-dom";
// import ReactDOM from "react-dom/client";

// import { withStyles } from "@material-ui/core/styles";


import logoPromart from "../images/logo_promart.png";
import logoSodimac from "../images/logo_sodimac.png";
import logoMaestro from "../images/logo_maestro.png";
import logoOechsle from "../images/logo_oechsle.png";
import logoPlazavea from "../images/logo_plazavea.png";
import logoFalabella from "../images/logo_falabella.png";

import "../css/styles-card.css";

/*
const styles = muiBaseTheme => ({
  card: {
    padding:"2rem 0",
    borderTop: "1px solid",
    borderColor: "rgb(0, 0, 0, 0.08)",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    columnGap: "2rem",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,1)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,1)"
    }
  }
});
*/

function LogoStores() {
  const cards = [
    { image: logoPromart },
    { image: logoSodimac },
    { image: logoMaestro },
    { image: logoOechsle },
    { image: logoPlazavea },
    { image: logoFalabella }
  ];
  const list = cards.map((card, i) => 
    <div key={i}>
      <img src={card.image} alt={"Hola"} />
    </div>
  );
  return (
    <div className="room-stores">
      <p style={{marginTop: "2rem", marginBottom: "1.5rem"}}>Armamos muebles de <span style={{fontWeight: 600}}>TODAS</span> las tiendas por departamento y/o afines</p>{/*Armamos muebles de Promart, Sodimac, Maestro y muchos más. */}
      <div className="single-room-images-logos" >
        {list}
      </div>
    </div>
  );
}

// const LogoStores = withStyles(styles)(App);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<LogoStores />);

export default LogoStores;