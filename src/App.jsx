import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import CoinList from "./components/CoinList";
const App = () => {
  const [coins, setCoins] = useState([]);
  const API_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en";

  const getCoins = async () => {
    try {
      const response = await axios.get(API_URL);
      setCoins(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoins();
  }, []);
  console.log(coins);
  return (
    <div className="bg-gray-900 h-w w-full m-0 p-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<CoinList coins={coins} />} />
      </Routes>
    </div>
  );
};

export default App;
