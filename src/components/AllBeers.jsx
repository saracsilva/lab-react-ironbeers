import React from "react";
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function AllBeers() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    const fetchBeers = async () => {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
    };
    fetchBeers();
  }, []);

  return (
    <div>
      <Header />
      {beers.map((beer) => (
        <div className="card mb-3" style={{ maxWidth: "540px" }} key={beer._id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={beer.image_url}
                className="img-fluid rounded-start"
                alt={beer.name}
                style={{ maxHeight: "200px", padding: "10px" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">{beer.name}</h1>
                <h4 className="card-text">{beer.tagline}</h4>
                <p className="card-text">
                  <b>Created by:</b> {beer.contributed_by}
                </p>
                <Link to={`/beers/${beer._id}`}>Check the beer</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllBeers;
