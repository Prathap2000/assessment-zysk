import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sisyphus from "./modules/sisyphus";
import Header from "./modules/header";
import SocialProof from "./modules/social";
import Blog from "./modules/blog";
import Footer from "./modules/footer";
import CTASection from "./modules/ctaSection";

function App() {
  return (
    <div className="App">
      <Header />
      <SocialProof />
      <Sisyphus />
      <Blog />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
