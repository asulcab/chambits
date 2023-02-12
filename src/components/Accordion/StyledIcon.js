import React from "react";
import { useSpring, animated } from "@react-spring/web";


const StyledIcon = ({ open, iconName }) => {  
  const styleIcon = useSpring({
    from:{ transform: "rotate(0deg)" },
    to:{
      transform: open ? "rotate(180deg)" : "rotate(0deg)"
    }
  });
  return (
  <animated.div style={styleIcon}>
    <i className="material-icons" style={{ padding: 16 }}>
      {iconName || "keyboard_arrow_down"}
    </i>
  </animated.div>
  );
};

export default StyledIcon;
