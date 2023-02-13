import React from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loadings = () => {
  return (
    <div align='center'>
        <Loader
            type="Puff"
            color="red"
            height={100}
            width={100}
            timeout={3000}
        />
    </div>
  )
}

export default Loadings;