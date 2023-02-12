import React from "react";
import Room from "./Room";
import { FaFrown } from "react-icons/fa";
const RoomsList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <span><FaFrown color="#ccc" fontSize="7rem"/></span>
        <h3>Lamentablemente no hay especialistas que coincidan con sus parámetros de búsqueda</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(item => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
};

export default RoomsList;
