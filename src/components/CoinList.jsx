import React from "react";
import { Link } from "react-router-dom";
import CoinItem from "./CoinItem";
import CoinPage from "./CoinPage";
const CoinList = ({ coins }) => {
  return (
    <div className="lg:max-w-[1260px] max-w-[85%] w-full mx-auto mt-8">
      <div>
        <div className="text-gray-200 flex justify-between items-center shadow-lg rounded-lg mx-2 my-4 font-bold px-6 py-4 lg:ml-4 bg-gray-800 w-full ml-0 ">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="lg:block hidden">Volume</p>
          <p className="lg:block hidden">Market cap</p>
        </div>
      </div>
      {coins.map((coin, i) => {
        return (
          <Link to={`/coin/${coin.id}`} element={<CoinPage />} key={i}>
            <CoinItem coin={coin} key={i} />
          </Link>
        );
      })}
    </div>
  );
};

export default CoinList;
