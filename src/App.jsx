import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import CoinList from "./components/CoinList";
import CoinPage from "./components/CoinPage";

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

  return (
    <div className="h-screen w-full m-0 p-4">
      <Navbar />
      <Routes>
        {/* Coin List */}
        <Route path="/" element={<CoinList coins={coins} />} />
        {/* CoinPage, coinId parametresi ile */}
        <Route path="/coin/:coinId" element={<CoinPage />} />
      </Routes>
    </div>
  );
};

export default App;
