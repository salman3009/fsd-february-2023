import React from "react";
import Link from "next/link";

function CoinCard({ coin }) {
  return (
    <div className="coin-card">
      <h3 className="coin-name">{coin.name}</h3>
      <h4 className="coin-symbol">{coin.symbol}</h4>
      <p className="coin-rank">Rank:{coin.rank}</p>
      <p className="coin-price">Price: ${coin.price_usd}</p>
      <Link className="view-details-link" href={`coins/${coin.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default CoinCard;
