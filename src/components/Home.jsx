import React from "react";
import { Link } from "react-router-dom";
import imgBeers from "../assets/beers.png";
import imgRandomBeer from "../assets/random-beer.png";
import imgNewBeer from "../assets/new-beer.png";
import "./Home.css";

function Home() {
  return (
    <div class="cards">
      <Link to={"/beers"}>
        <div className="card " style={{ width: 400 }}>
          <img src={imgBeers} alt="beers" />

          <div className="card-body">
            <h5 className="card-title">All Beers</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </Link>
      <Link to={"/random-beer"}>
        <div className="card " style={{ width: 400 }}>
          <img src={imgRandomBeer} alt="beers" />
          <div className="card-body">
            <h5 className="card-title">Random Beer</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>{" "}
      </Link>
      <Link to={"/new-beer"}>
        <div className="card " style={{ width: 400 }}>
          <img src={imgNewBeer} alt="beers" />
          <div className="card-body">
            <h5 className="card-title">New Beer</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>{" "}
      </Link>
    </div>
  );
}

export default Home;
