import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import Description from "./components/description";
import Intro from "./components/intro";
import Tokenomics from "./components/tokenomics/tokenomics";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Intro />
      <Description />
      <Services />
    </div>
    <Welcome />
    <Tokenomics />
    {/* <Transactions /> */}
    <Footer />
  </div>
);

export default App;
