import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import PokeCard_info from "./PokeCard_info";
import About from "./About";
import Stat from "./Stat";
function Info(props) {
  const location = useLocation();
  const propsData = location.state;
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [Type, setType] = useState([]);
  const [Image, setImage] = useState("");
  const [Altimg, setAltimg] = useState("");
  const [bg_type, setBG] = useState("");
  const [isAbout, setAbout] = useState(true);
  const [isStat, setStat] = useState(false);
  useEffect(() => {
    axios.get(propsData.pokemon_url).then((res) => {
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
      <Navbar />
      <div className={` Container ${bg_type}`}>
        <PokeCard_info
          Image={Image}
          Altimg={Altimg}
          bg_type={bg_type}
          info={info}
          Type={Type}
        />
        <div className={`Poketab`}>
          <div
            className="Tab"
            onClick={() => {
              setAbout(true);
              setStat(false);
            }}
          >
            <h3>About</h3>
          </div>
          <div
            className="Tab"
            onClick={() => {
              setAbout(false);
              setStat(true);
            }}
          >
            <h3>Stats</h3>
          </div>
        </div>
        {isAbout && <About />}
        {isStat && <Stat/>}
      </div>
    </div>
  );
}
export default Info;
