import React from "react";
// import axios from "axios";
import "../App.css";
function Stat(props) {
  return (
    <div className="About-Container">
      <h1 className={`heading-about `}>Base Stats</h1>
      <table className="Stat-table">
        <tr>
          <th className="stat-th">{props.Stats[0].stat.name}</th>
          <td className="stat-th">{props.Stats[0].base_stat}</td>
          <td className="range-slide">
            <div
              className="range-slide-fill"
              style={{ "--precentage": (props.Stats[0].base_stat / 714) * 100 + "%" }}
            ></div>
          </td>
        </tr>
        <tr>
          <th className="stat-th">{props.Stats[1].stat.name}</th>
          <td className="stat-th">{props.Stats[1].base_stat}</td>
          <td className="range-slide">
            <div
              className="range-slide-fill"
              style={{ "--precentage": (props.Stats[1].base_stat / 714) * 100 + "%" }}
            ></div>
          </td>
        </tr>
        <tr>
          <th className="stat-th">{props.Stats[2].stat.name}</th>
          <td className="stat-th">{props.Stats[2].base_stat}</td>
          <td className="range-slide">
            <div
              className="range-slide-fill"
              style={{ "--precentage": (props.Stats[2].base_stat / 614) * 100 + "%" }}
            ></div>
          </td>
        </tr>
        <tr>
          <th className="stat-th">{props.Stats[3].stat.name}</th>
          <td className="stat-th">{props.Stats[3].base_stat}</td>
          <td className="range-slide">
            <div
              className="range-slide-fill"
              style={{ "--precentage": (props.Stats[3].base_stat / 504) * 100 + "%" }}
            ></div>
          </td>
        </tr>
        <tr>
          <th className="stat-th">{props.Stats[4].stat.name}</th>
          <td className="stat-th">{props.Stats[4].base_stat}</td>
          <td className="range-slide">
            <div
              className="range-slide-fill"
              style={{ "--precentage": (props.Stats[4].base_stat / 614) * 100 + "%" }}
            ></div>
          </td>
        </tr>
        <tr>
          <th className="stat-th">{props.Stats[5].stat.name}</th>
          <td className="stat-th">{props.Stats[5].base_stat}</td>
          <td className="range-slide">
            <div
              className="range-slide-fill"
              style={{ "--precentage": (props.Stats[5].base_stat / 504) * 100 + "%" }}
            ></div>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default Stat;
