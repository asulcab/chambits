import React, { Component } from "react";
import Title from "./Title";
import { RoomContext } from "../context";
import Room from "./Room";
import Loading from "./Loading";
export default class SpecialOrder extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="special-order">
        <Title title="Menú" />
        <div className="special-order-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
