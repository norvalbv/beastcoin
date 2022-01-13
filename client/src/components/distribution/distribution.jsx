import "./distribution.scss";

export default function Distribution() {
  return (
    <div className="distribution gradient-bg-distribution" id="distribution">
      <h2 className="text-3xl sm:text-5xl text-white text-gradient py-1">Token Distribution</h2>
      <p className="purchase">Token Distribution.</p>
      <ul className="outer-ul">
        <ul className="inner-ul">
          <li>65%</li>
          <li>Initial Supply</li>
        </ul>
        <ul className="inner-ul">
          <li>5%</li>
          <li>Pre Sale</li>
        </ul>
        <ul className="inner-ul">
          <li>15%</li>
          <li>Charity</li>
        </ul>
        <ul className="inner-ul">
          <li>15%</li>
          <li>Management</li>
        </ul>
      </ul>
      <p className="purchase">Use Of Management Funds.</p>
      <ul className="outer-ul">
        <ul className="inner-ul">
          <li>60%</li>
          <li>Devs</li>
        </ul>
        <ul className="inner-ul">
          <li>25%</li>
          <li>Marketing</li>
        </ul>
        <ul className="inner-ul">
          <li>15%</li>
          <li>Reserves</li>
        </ul>
      </ul>
    </div>
  );
}
