import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState([]);

  const fetchBeer = async (setter) => {
    const response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/random`
    );
    setter(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchBeer(setRandomBeer);
  }, []);
  return (
    <div>
      <Header />
      <div className="card" style={{ width: "18rem" }}>
        <img src={randomBeer.image_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h1 className="card-title">{randomBeer.name}</h1>
          <h4 className="card-text">{randomBeer.tagline}</h4>
          <h4 className="card-text">{randomBeer.first_brewed}</h4>
          <h4 className="card-text">{randomBeer.attenuation_level}</h4>
          <p className="card-text">{randomBeer.description}</p>
          <h6 className="card-text">
            <b>Created By:</b>
            {randomBeer.contributed_by}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default RandomBeer;
