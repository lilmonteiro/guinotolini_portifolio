import React from "react";
import { ThumbContainer } from "./style.jsx";
import { useNavigate } from "react-router";

const Thumb = (props) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path)
  };

  return (
    <ThumbContainer id="trampos">
      <div className="thumb-square"></div>
      <div className="thumb-row-1">
        <p
          onClick={() => {
            handleNavigate("estadao");
          }}
        >
          Estadão{" "}
          <img
            className="thumb-img"
            id="estadao"
            src="/images/jobs/3.png"
            alt="Estadão, a verdade sobre as mentiras."
          />
        </p>
        <div className="thumb-column-2">
          <p
            onClick={() => {
              handleNavigate("kn2");
            }}
          >
            KN2<span className="bar">/</span> <img className="thumb-img" id="kn2" src="/images/jobs/2.png" alt="KNZ Cannabis" />
          </p>
          <p
            onClick={() => {
              handleNavigate("joycrock");
            }}
          >
            JoyCrock <img id="joy" className="thumb-img" src="/images/jobs/1.png" alt="JoyCrock" />
          </p>
        </div>
      </div>
      <div className="thumb-row-2">
        <p
          onClick={() => {
            handleNavigate("aon");
          }}
        >
          Dia a dia (AON){" "}
          <img id="tbs" className="thumb-img" src="/images/jobs/4.png" alt="The Body Shop" />
        </p>
        <p
          onClick={() => {
            handleNavigate("maestra");
          }}
        >
          <span className="bar">/</span>Maestra <img id="maestra" className="thumb-img" src="/images/jobs/5.png" alt="Maestra" />
        </p>
      </div>
    </ThumbContainer>
  );
};

export default Thumb;
