import React from "react";

const CoinItem = ({ coin }) => {
  return (
    <div className="text-white flex justify-between items-center shadow-lg rounded-lg lg:mx-4 my-8  px-6 py-3 hover:scale-105 transition-all duration-300 ease-in cursor-pointer w-full bg-gray-800   ">
      <p>{coin.market_cap_rank}</p>
      <div className="flex items-center gap-x-2 w-auto">
        <img src={coin.image} alt="" className="w-10" />
        <p>{coin.symbol.toUpperCase()}</p>
      </div>
      <p>$ {coin.current_price.toLocaleString()}</p>
      <p>{coin.price_change_percentage_24h.toFixed(1)}%</p>
      <p className="lg:block hidden">$ {coin.total_volume.toLocaleString()}</p>
      <p className="lg:block hidden">{coin.market_cap.toLocaleString()}</p>
    </div>
  );
};

export default CoinItem;
