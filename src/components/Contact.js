import React from "react";
// import { Link } from "react-router-dom";

import { /*FaWhatsapp,*/ FaPhone, FaFacebookF } from "react-icons/fa";

// import { Link } from "react-router-dom";
// import defaultImg from "../images/room-1.jpeg";
// import PropTypes from "prop-types";
// import { memo } from "react";
// import Contact from "./Contact";
// const Room = memo(({ room }) => {
//     const { contact } = room;
//     // console.log(name);
//     return (
//         <div>
//             <h6>{contact}</h6>
//             {/* <p>experiencia</p> */}
//         </div>
//     );
// });

// Room.propTypes = {
//     room: PropTypes.shape({
//         contact: PropTypes.string.isRequired
//     })
// };
// export default Room;

const Contact = () => {
    return (
        <div className="section-contact">
            <a className="contact" href="tel: 980895124">
                <span><FaPhone /></span>
                <h6>980 895 124</h6>
            </a>
            <a className="contact-social" href="https://www.facebook.com/chambits01/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        </div>
    );
};

export default Contact;