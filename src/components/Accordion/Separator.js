import React from "react";
import { useSpring, animated, config } from "@react-spring/web";

const Separator = ({visible}) => {
  const styleSeparator = useSpring({
    from:{ width: "0%", borderBottom: "0px" },
    to:{
      width: visible ? "100%" : "0%",
      borderBottom: "1px solid #ededed"
    },
    config: config.slow
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <animated.div style={styleSeparator} >
        {/* {({ width }) => (
          <div style={{ borderBottom: "1px solid #ededed", width: {width} }} />
        )} */}
      </animated.div>
    </div>
  )
};

export default Separator;
