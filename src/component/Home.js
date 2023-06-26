import React, { useState, useEffect } from "react";
import Pokecard from "./Pokecard";
import axios from "axios";
import "../App.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=24"
  );
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  useEffect(() => {
    axios.get(url).then((res) => {
      // console.log(res);
      // console.log(url);
      setPokemon(res.data.results);
      setNext(res.data.next);
      setPrev(res.data.previous);
    });
  }, [url]);
  const nextPage = () => {
    setUrl(next);
  };
  const prevPage = () => {
    setUrl(prev);
  };
  return (
    <div>
      <Navbar />
      <div className="card-container">
        {pokemon.map((item) => {
          return (
            <Link
              state={{ name: item.name, pokemon_url: item.url}}
              style={{ textDecoration: "none" }}
              to="/info"
            >
              <Pokecard name={item.name} pokemon_url={item.url} />
            </Link>
          );
        })}
      </div>
      <button disabled={prev == null} onClick={prevPage}>
        Prev
      </button>
      <button onClick={nextPage}>Next</button>
    </div>
  );
}
export default Home;
