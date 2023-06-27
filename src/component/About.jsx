import React from "react";
// import axios from "axios";
import "../App.css";
function About(props) {
  return (
    <div className="About-Container">
      <h1 className={`heading-about `}>Pokédex Data</h1>
      <table className="About-table">
        <tbody>
          <tr>
            <th className="th">Height</th>
            <td>{props.height / 10}m</td>
          </tr>
          <tr>
            <th className="th">Weight</th>
            <td>{props.weight / 10}kg</td>
          </tr>
          <tr>
            <th className="about-th">Abilities</th>
            <td>
              <>
                {props.Ability.map((item) => {
                  if (item.is_hidden) {
                    return (
                      <div>
                        <li>{item.ability.name} (Hidden Ability)</li>
                        
                      </div>
                    );
                  }
                  return <li>{item.ability.name}</li>;
                })}
              </>
            </td>
          </tr>
        </tbody>
      </table>
      {/* <div className="Info-about-container">
        <div className="common-about">
          <pre><b>Height        </b></pre>
          <p>{props.height / 10} m</p>
        </div>
        <div className="common-about">
            <pre><b>Weight        </b></pre>
          <p>{props.weight / 10} kg</p>
        </div>
        <div className="common-about">
            <pre><b>                   Abilities </b></pre>
            <ul>
          {props.Ability.map((item) => {
            if (item.is_hidden) {
              return (
                <div>
                  <li>{item.ability.name}</li>
                  <>(Hidden Ability)</>
                </div>
              );
            }
            return (
              <div>
                <li>{item.ability.name}</li>
              </div>
            );
          })}
          </ul>
        </div> */}
      {/* </div> */}
    </div>
  );
}
export default About;
