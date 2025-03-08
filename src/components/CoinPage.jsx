import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinPage = () => {
  const [coin, setCoin] = useState({});
  const params = useParams();
  const URL = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  // Güncellediğim yer: `axios.get`'i `await` ile düzgün bir şekilde kullanmak
  const fetchCoin = async () => {
    try {
      const response = await axios.get(URL); // `await` kullanıldı
      setCoin(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCoin(); // `fetchCoin` fonksiyonu çağrıldı
  }, [params.coinId]); // params.coinId değiştiğinde yeniden veri çek

  // Güncellediğim yer: `coin.market_data` ve loading durumu kontrolü
  return (
    <div>
      {coin.market_data ? (
        <div className="max-w-[868px] mx-auto mt-16">
          <div className="bg-gray-800 py-6 shadow-lg rounded-lg">
            <h1 className="text-center text-white font-semibold text-3xl">
              {coin.name}
            </h1>
            {/* Coin'in fiyatı gibi daha fazla veri ekleyebilirsiniz */}
            <p className="text-center text-white mt-4">
              Current Price: ${coin.market_data.current_price.usd}
            </p>
          </div>
          <div className="bg-gray-800 py-6 shadow-lg rounded-lg mt-12 px-4">
            <div className="text-center text-white">
              <span className="bg-[#f3ba2f] rounded-sm border-4 border-[#fab913] py-1 px-2">
                Rank # {coin.market_cap_rank}
              </span>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center justify-center gap-x-4 text-white ">
                {coin.image ? <img src={coin.image.small} alt="" /> : null}
                <p className="text-lg">{coin.name}</p>
                {coin.symbol ? (
                  <p className="text-[#f3ba2f] text-sm ">
                    {coin.symbol.toUpperCase()}
                  </p>
                ) : null}
              </div>
              <div>
                <h1 className="text-white text-3xl font-semibold ">
                  ${coin.market_data.current_price.usd}
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 shadow-lg rounded-lg mt-12 text-center py-3 w-full">
            <table className="w-full my-2">
              <thead>
                <tr className="text-white">
                  <th className="py-3">1h</th>
                  <th className="py-3">24h</th>
                  <th className="py-3">7d</th>
                  <th className="py-3">14d</th>
                  <th className="py-3">30d</th>
                  <th className="py-3">1yr</th>
                </tr>
              </thead>
              <tbody className="text-gray-100 text-center">
                <td>
                  {coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </td>
                <td>
                  {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </td>
                <td>
                  {coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </td>
                <td>
                  {coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </td>
                <td>
                  {coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </td>
                <td>
                  {coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                    1
                  )}
                  %
                </td>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-800 mt-12 shadow-lg rounded-lg py-5 px-4 text-white">
            <div className="flex lg:flex-row flex-col items-center justify-between lg:gap-x-12 lg:gap-y-0 gap-y-4 ">
              <div className="flex lg:flex-row flex-col justify-between lg:w-1/2 w-full lg:gap-y-0 gap-y-4 ">
                <div className="flex lg:flex-col lg:justify-between lg:gap-x-0 gap-x-2 lg:pb-0 pb-2 lg:border-none border-b  ">
                  <h4 className="font-semibold ">24 Hour Low </h4>
                  <p>${coin.market_data.low_24h.usd}</p>
                </div>
                <div className="flex lg:flex-col lg:justify-between lg:gap-x-0 gap-x-2 lg:pb-0 pb-2 lg:border-none border-b lg:mt-0 mt-8 ">
                  <h4 className="font-semibold ">24 Hour High </h4>
                  <p>${coin.market_data.high_24h.usd}</p>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col justify-between lg:w-1/2 w-full lg:gap-y-0 gap-y-4 ">
                <div className="flex lg:flex-col lg:justify-between lg:gap-x-0 gap-x-2 lg:pb-0 pb-2 lg:border-none border-b  ">
                  <h4 className="font-semibold ">Market Cap </h4>
                  <p>${coin.market_data.market_cap.usd}</p>
                </div>
                <div className="flex lg:flex-col lg:justify-between lg:gap-x-0 gap-x-2 lg:pb-0 pb-2  lg:mt-0 mt-8 ">
                  <h4 className="font-semibold ">Circulating Supply </h4>
                  <p>${coin.market_data.circulating_supply.usd}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 mt-12 shadow-lg rounded-lg py-6 px-4 ">
            <div>
              <h3 className=" text-white font-semibold text-xl ">About</h3>
              {coin.description ? (
                <p className="text-gray-300 mt-4 ">{coin.description.en}</p>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-white mt-16">Loading...</div> // Yükleme mesajı
      )}
    </div>
  );
};

export default CoinPage;
