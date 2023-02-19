import React, { Component } from "react";
import items from "./data";
// import Client from "./Contentful";

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    //
    type: "- ver todo -", // todas x all
    district:"- ver todo -",
    capacity: 1,
    experience: 0, // price
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    workshop: false, // breakfast
    home: false // pets
  };

  // getData
  // getData = async () => {
  //   try {
  //     let response = await Client.getEntries({
  //       content_type: "beachResortRoom",
  //       // order: 'sys.createdAt'
  //       order: "fields.price"
  //     });
  //     let rooms = this.formatData(response.items);
  //     let featuredRooms = rooms.filter(room => room.featured === true);
  //     //
  //     let maxPrice = Math.max(...rooms.map(item => item.price));
  //     let maxSize = Math.max(...rooms.map(item => item.size));
  //     this.setState({
  //       rooms,
  //       featuredRooms,
  //       sortedRooms: rooms,
  //       loading: false,
  //       //
  //       price: maxPrice,
  //       maxPrice,
  //       maxSize
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // getData = async () => {
  //   try {
  //     let response = await Client.getEntries({
  //       content_type: "beachResortRoom"
  //     });
  //     let rooms = this.formatData(response.items);

  //     let featuredRooms = rooms.filter(room => room.featured === true);
  //     //
  //     let maxPrice = Math.max(...rooms.map(item => item.price));
  //     let maxSize = Math.max(...rooms.map(item => item.size));
  //     this.setState({
  //       rooms,
  //       featuredRooms,
  //       sortedRooms: rooms,
  //       loading: false,
  //       //
  //       price: maxPrice,
  //       maxPrice,
  //       maxSize
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // componentDidMount() {
  //   this.getData();
    
  // }
  
  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    //
    let maxPrice = Math.max(...rooms.map(item => item.experience));
    let maxSize = Math.max(...rooms.map(item => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      //
      experience: maxPrice,
      maxPrice,
      maxSize
    })
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let imagesS = item.fields.imagesS.map(image => image.fields.file.url);

      let room = { ...item.fields, images, id, imagesS };
      return room;
    });
    return tempItems;
  }

  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let {
      rooms,
      type,
      district,
      // capacity,
      experience, // price
      // minSize,
      // maxSize,
      workshop, // breakfast
      home // pets
    } = this.state;

    let tempRooms = [...rooms];
    // transform values
    // get capacity
    // capacity = parseInt(capacity);
    experience = parseInt(experience);
    // filter by type
    if (type !== "- ver todo -") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    // filter by district
    if (district !== "- ver todo -") {
      tempRooms = tempRooms.filter(room => room.district === district);
    }
    // filter by capacity
    // if (capacity !== 1) {
    //   tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    // }
    // filter by price
    tempRooms = tempRooms.filter(room => room.experience <= experience);
    //filter by size
    // tempRooms = tempRooms.filter(
    //   room => room.size >= minSize && room.size <= maxSize
    // );
    //filter by breakfast
    if (workshop) {
      tempRooms = tempRooms.filter(room => room.workshop === true);
    }
    //filter by pets
    if (home) {
      tempRooms = tempRooms.filter(room => room.home === true);
    }
    this.setState({
      sortedRooms: tempRooms
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
