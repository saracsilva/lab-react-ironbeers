import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

function Beer() {
  let { id } = useParams();

  const [currentBeer, setCurrentBeer] = useState([]);

  const fetchBeer = async (setter) => {
    const response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/${id}`
    );
    setter(response.data);
  };

  useEffect(() => {
    fetchBeer(setCurrentBeer);
  }, []);
  return (
    <div>
      <Header />
      <div className="card" style={{ width: "18rem" }}>
        <img src={currentBeer.image_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h1 className="card-title">{currentBeer.name}</h1>
          <h4 className="card-text">{currentBeer.tagline}</h4>
          <h4 className="card-text">{currentBeer.first_brewed}</h4>
          <h4 className="card-text">{currentBeer.attenuation_level}</h4>
          <p className="card-text">{currentBeer.description}</p>
          <h6 className="card-text">
            <b>Created By:</b>
            {currentBeer.contributed_by}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Beer;
