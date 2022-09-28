import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const Characters = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then((response) => {
        setInfo(response.data.results);
      })
      .catch((error) => {
        console.log("Error Retrieving Results", error);
      });
  }, []);

  return (
    <>
      <div class="body">
        {info.map((item) => (
          <section>
            <div class="container-card">
              <div class="card">
                <div class="content">
                  <div class="imgBx">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div class="contentBx">
                    <h5>Name: {item.name} </h5>
                    <h5>Last Known Location: {item.location.name} </h5>
                    <h5>Last Known Status: {item.status} </h5>
                    <h5>Gender: {item.gender} </h5>
                    <h5>Origin: {item.origin.name} </h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default Characters;
