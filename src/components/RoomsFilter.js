import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  // react hooks
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    district,
    // capacity,
    experience, // price
    minPrice,
    maxPrice,
    // minSize,
    // maxSize,
    workshop, // breakfast
    home // pets
  } = context;

  // get unique types
  let types = getUnique(rooms, "type");
  // add all ("todas x all")
  types = ["- ver todo -", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique districts
  let districts = getUnique(rooms, "district");
  // add all ("todas x all")
  districts = ["- ver todo -", ...districts];
  // map to jsx
  districts = districts.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique capacity
  /*
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  */
  return (
    <section className="filter-container">
      <Title title="Elija un servicio" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">en:</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* select district */}
        <div className="form-group">
          <label htmlFor="district">distrito</label>
          <select
            name="district"
            id="district"
            onChange={handleChange}
            className="form-control"
            value={district}
          >
            {districts}
          </select>
        </div>
        {/* end of select district */}
        {/* guests  */}
        {/*
        <div className="form-group">
          <label htmlFor="capacity">huéspdes</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
            value={capacity}
          >
            {people}
          </select>
        </div>
        */}
        {/* end of guests */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="experience">expreriencia {experience} años</label>
          <input
            type="range"
            name="experience"
            min={minPrice}
            max={maxPrice}
            id="experience"
            value={experience}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of room price*/}
        {/* size */}
        {/*
        <div className="form-group">
          <label htmlFor="price">tamaño </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        */}
        {/* end of select type */}
        {/* extras */}
        <div className="form-group">
          <label htmlFor="extras">atención:</label>
          <div className="single-extra">
            <span>
              <input
                type="checkbox"
                name="home"
                id="home"
                checked={home}
                onChange={handleChange}
              />
              <label htmlFor="home">domicilio</label>
            </span>
            <span style={{marginLeft: "1rem"}}>
              <input
                type="checkbox"
                name="workshop"
                checked={workshop}
                onChange={handleChange}
              />
              <label htmlFor="home">taller</label>
            </span>
          </div>
        </div>
        {/* end of extras type */}
      </form>
    </section>
  );
};

export default RoomsFilter;
