import React from "react";
import './css/App.css';

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import AboutUs from "./pages/AboutUs";
import Food from "./pages/Food";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<AboutUs />} />
          <Route exact path='/rooms/' element={<Rooms />} />
          {/* <Route exact path='/rooms/:slug' element={<SingleRoom />} /> */}
          <Route exact path=':slug' element={<SingleRoom />} />
          <Route exact path='/nosotros' element={<AboutUs />} />
          <Route exact path='/proyectos' element={<Food />} />
          <Route exact path='/contacto' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
