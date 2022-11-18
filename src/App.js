import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Home from "./components/Home";
import AllBeers from "./components/AllBeers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

function App() {
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
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer beer={beers} />} />
      </Routes>
    </div>
  );
}

export default App;
