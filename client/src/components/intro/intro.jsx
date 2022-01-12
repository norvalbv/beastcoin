import logo from "../../../images/Mr-Beast-Logo.png";
import "./intro.scss";

export default function Intro() {
  return (
    <div className="container">
      <img src={logo} alt="#" className="branding" style={{ zIndex: "-0" }} />
      <div className="container-inner">
        <h1 className="text-white text-gradient main-header">
          Invest <br /> Hold <br /> Donate
        </h1>
        <p className="header-desc" style={{ zIndex: "1" }}>
          Explore the crypto world. Buy and sell cryptocurrencies easily with Beast Coin.
        </p>
        <p className="contract">0xed362fd6e1e92d0fca1606462ceced538671531d</p>
        <p className="contract-2">0xed362fd6e1e92d0fca16<br />06462ceced538671531d</p>
      </div>
    </div>
  );
}
