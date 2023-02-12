import React, { useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import StyledIcon from "./StyledIcon";
import Separator from "./Separator";

const AccordionItem = ({ faq, onToggle, active, index, lenArray }) => {  
  const { question, answer } = faq;
  const contentEl = useRef();
  
  const isFirst = index === 0;
  const isLast = index + 1 === lenArray;
  const isAccordionOpen = active;

  const styleAcoordion = useSpring({
    from: { marginTop: 4, marginBottom: 4},
    to: {
      marginTop: isAccordionOpen && !isFirst ? 16 : 4,
      marginBottom: isAccordionOpen && !isLast ? 16 : 4 }
  });

  return (
    <animated.div className={`accordion_item ${active ? "active" : ""}`} style={styleAcoordion}>
      <div className={`button ${active ? "active" : ""}`} onClick={onToggle}>
        <h6 style={{margin: "16px", fontWeight: 500}}>{question}</h6>
        {/* <span className="control">{active ? "—" : "+"}</span> */}
        <StyledIcon iconName="keyboard_arrow_down" open={active} />
      </div>
      <Separator visible={active} />
      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          active
          ? { height: contentEl.current.scrollHeight }
          : { height: "0px" }
        }
      >
        <ul className="answer">
          {answer.map((item, i) => (
            <li key={i}>{item}</li>
            ))}
        </ul>
      </div>
    </animated.div>
  );
};
 
export default AccordionItem;