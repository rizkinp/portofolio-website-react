import React, { useState } from "react";
import data from "./data"
import './portofolio.css';

function Portofolio() {
  const [item, setItem] = useState(data);

  const filterItem = (cateItem) => {
    const updateItem = data.filter((currElem) => {
      return currElem.category === cateItem;
    });
    setItem(updateItem);
  };

  return (
    <div className="portfolio mtop" id="Portofolio">
      <div className="container">
        <div className="head flexSB">
          <div className="left">
            <h2>All of My Portofolio will be updated soon</h2>
          </div>
        </div>

        <div className="links">
          <ul className="flexSB">
            <li className="active" onClick={() => setItem(data)}>All</li>
            <li onClick={() => filterItem("Web")}>Web</li>
            <li onClick={() => filterItem("Mobile")}>Mobile</li>
          </ul>
        </div>

        <div className="content grid stop">
          {item.map((elem) => {
            const { cover, title } = elem;

            return (
              <div className="box" key={title}>
                <div className="img">
                  <img src={cover} alt="" />
                </div>
                <div className="overlay">
                  <h1>{title}</h1>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Portofolio;
