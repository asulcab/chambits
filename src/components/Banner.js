import React from "react";
// import '../css/App.css';
const Banner = ({ children, title, subtitle }) => {
  return (
    <div className="banner">
      <h1 className="h1">{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;
