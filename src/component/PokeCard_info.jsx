import React from "react";
// import axios from "axios";
import "../App.css";
// import Navbar from "./Navbar";
import { Link} from "react-router-dom";
function PokeCard_info(props) {
  return (
    <div>
      <Link to="/" className="arrow-back"></Link>
      <div className=" Image-info Pokeball-bgimage-info"></div>
      <div className={`Top-Container`}>
        <div className={`Pokemon-card-info`}>
          {props.Altimg && <img className="Pokemon-image-info" src={props.Altimg} alt="" />}
          {!props.Altimg && <img className="Pokemon-image-info" src={props.Image} alt="" />}
          <div className="Pokemon-data">
            <div className="Pokemon-id Pokemon-id-info">#{props.info.id}</div>
            <div
              style={{ textTransform: "capitalize" }}
              className="Pokemon-name Pokemon-name-info"
            >
              {props.info.name}
            </div>
            <div className={`Pokemon-type`}>
              {props.Type.map((item) => {
                return (
                  <div className={`types types-${item.type.name}`}>
                    <img
                      className="type-icon"
                      src={`./images/types-icons/${item.type.name}.svg`}
                      alt={item.type.name}
                    />
                    <p
                      style={{ textTransform: "capitalize" }}
                      className={`types`}
                    >
                      {item.type.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PokeCard_info;
