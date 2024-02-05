import { useState, useEffect } from "react";

function CoinDetail() {
  const [coin, setCoin] = useState(null);

  return (
    <div className="coin-detail">
      <div className="name-symbol">
        <h1 className="name">coin-name</h1>
        <h2 className="symbol">(coin-symbol)</h2>
      </div>
      <div className="market-description">
        <p className="coin-rank">Rank: coin-symbol</p>
        <p className="coin-price">Price: $coin-price</p>
        <p className="coin-market-cap">Market Cap: $coin-market_cap_usd</p>
        <p className="coin-total-supply">Total Supply: coin-tsupply</p>
        <p className="coin-max-supply">Max Supply: coin-msupply</p>
      </div>
    </div>
  );
}

export default CoinDetail;
