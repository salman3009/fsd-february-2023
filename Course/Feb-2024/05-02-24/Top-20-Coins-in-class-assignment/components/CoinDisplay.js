import React, { useState, useEffect } from "react";
import CoinCard from "./CoinCard";

function CoinDisplay({ coin }) {
  const [coins, setCoins] = useState([]);

  const fetchCoinDetails= async ()=>{
         try{
            const response = await fetch("https://api.coinlore.net/api/tickers/");
            const result = await response.json();
            console.log(result.data);
            const finalResult = result.data.slice(0,20);
            setCoins(finalResult);
         }catch(err){
           console.log(err);
         }
  }

  useEffect(()=>{
    fetchCoinDetails();
  },[])

  return (
    <div className="home">
      <h1>Top 20 Cryptos</h1>
      <div className="coins-container">
        {coins.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
}

export default CoinDisplay;
