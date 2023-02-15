import Header from "../include/header";
import Metamorph from "./Metamorph";
import About from './About';
import Team from "./Team";
import Faq from "./Faq";
import Roadmap from "./Roadmap";
import Footer from "../include/footer";

function Dashboard() {
  return (
    <div>
      <Header />
      <Metamorph />
      <About />
      <Team />
      <Faq />
      <Roadmap />
      <Footer />
    </div>
  );
}
export default Dashboard