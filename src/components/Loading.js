import React from "react";
import loadingGif from "../images/gif/loading-arrow.gif";
const Loading = () => {
  return (
    <div className="loading">
      <h4>cargando datos....</h4>
      <img src={loadingGif} alt="" />
    </div>
  );
};

export default Loading;
