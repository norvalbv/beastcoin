import "./tokenomics.scss";

export default function Tokenomics() {
  return (
    <div className="tokenomics gradient-bg-transactions">
      <h2 className="text-3xl sm:text-5xl text-white text-gradient py-1">Tokenomics</h2>
      <p className="purchase">Buy on PancakeSwap with 1% slippage.</p>
      <ul className="outer-ul">
        <ul className="inner-ul">
          <li>+4000</li>
          <li>Holders</li>
        </ul>
        <ul className="inner-ul">
          <li>100M</li>
          <li>Total Supply</li>
        </ul>
        <ul className="inner-ul">
          <li>$1 million</li>
          <li>Market Cap</li>
        </ul>
        <ul className="inner-ul">
          <li>$0.01</li>
          <li>Current Price</li>
        </ul>
      </ul>
    </div>
  );
}
