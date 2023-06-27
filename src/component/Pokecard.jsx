import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
// import { Link } from "react-router-dom";
function Pokecard(props) {
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [Type, setType] = useState([]);
  const [Image, setImage] = useState("");
  const [Altimg, setAltimg] = useState("");
  const [bg_type, setBG] = useState("");
  useEffect(() => {
    axios.get(props.pokemon_url).then((res) => {
      console.log(res.data);
      setInfo(res.data);
      setType(res.data.types);
      setBG(res.data.types[0].type.name);
      setImage(res.data.sprites.other["official-artwork"].front_default);
      setAltimg(res.data.sprites.other.dream_world.front_default);
      setLoading(false);
    });
  }, [props.pokemon_url]);
  return (
    <div>
      <div className={`Pokemon-card ${bg_type}`}>
        <div>
          <div className="Pokemon-id">#{info.id}</div>
          <div className="Pokemon-name">
            {props.name.charAt(0).toUpperCase()}
            {props.name.slice(1)}
          </div>
          <div className={`Pokemon-type`}>
            {Type.map((item) => {
              return (
                <div className={`types types-${item.type.name}`}>
                  <img
                    className="type-icon"
                    src={`./images/types-icons/${item.type.name}.svg`}
                    alt={item.type.name}
                  />
                  <p className={`types`}>
                    {item.type.name.charAt(0).toUpperCase()}
                    {item.type.name.slice(1)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" Image Pokeball-bgimage"></div>
        <div className="Image">
          { Altimg && <img className="Pokemon-image" src={Altimg} alt="" />}
          {!Altimg && <img className="Pokemon-image" src={Image} alt="" />}
        </div>
      </div>
    </div>
  );
}
export default Pokecard;
