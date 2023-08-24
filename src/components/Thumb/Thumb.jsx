import React from "react";
import { ThumbContainer } from "./style.jsx";

const Thumb = (props) => {
  return (
    <ThumbContainer>
      <div className="thumb-square"></div>
      <div className="thumb-row-1">
        <p>
          Estadão <img className="thumb-img" id="estadao" src="/images/jobs/3.png" alt="Estadão, a verdade sobre as mentiras."/>
        </p>
        <div className="thumb-column-2">
          <p>KN2/ <img className="thumb-img" id="kn2" src="/images/jobs/2.png" alt="KNZ Cannabis"/></p>
          <p>JoyCrock  <img id="joy" className="thumb-img" src="/images/jobs/1.png" alt="JoyCrock"/></p>
        </div>
      </div>
      <div className="thumb-row-2">
        <p>/The Body Shop  <img id="tbs" className="thumb-img" src="/images/jobs/4.png" alt="The Body Shop"/></p>
        <p>/Maestra <img id="maestra" className="thumb-img" src="/images/jobs/5.png" alt="Maestra"/></p>
      </div>
    </ThumbContainer>
  );
};

export default Thumb;
