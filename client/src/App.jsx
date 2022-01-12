import { Navbar, Footer, Services } from "./components";
import Description from "./components/description/description";
import Distribution from "./components/distribution/distribution";
import HowTo from "./components/howto/howto";
import Intro from "./components/intro/intro";
// import Tokenomics from "./components/tokenomics/tokenomics";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Intro />
      <Description />
      <Services />
    </div>
    {/* <Welcome /> */}
    {/* <Tokenomics /> */}
    {/* <Transactions /> */}
    <Distribution />
    <HowTo />
    <Footer />
  </div>
);

export default App;
