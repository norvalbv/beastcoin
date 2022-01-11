import "./distribution.scss";

export default function Distribution() {
  return (
    <div className="tokenomics gradient-bg-distribution">
      <h2 className="text-3xl sm:text-5xl text-white text-gradient py-1">Token Distribution</h2>
      <p className="purchase">Token Distribution.</p>
      <ul className="outer-ul">
        <ul className="inner-ul">
          <li>65%</li>
          <li>Initial Supply</li>
        </ul>
        <ul className="inner-ul">
          <li>7.5%</li>
          <li>Pre Sale</li>
        </ul>
        <ul className="inner-ul">
          <li>10%</li>
          <li>Charity</li>
        </ul>
        <ul className="inner-ul">
          <li>17.5%</li>
          <li>Management</li>
        </ul>
      </ul>
      <p className="purchase">Use Of Proceeds.</p>
      <ul className="outer-ul">
        <ul className="inner-ul">
          <li>57.25%</li>
          <li>Devs</li>
        </ul>
        <ul className="inner-ul">
          <li>28.75%</li>
          <li>Marketing</li>
        </ul>
        <ul className="inner-ul">
          <li>14%</li>
          <li>Contigency</li>
        </ul>
      </ul>
    </div>
  );
}
