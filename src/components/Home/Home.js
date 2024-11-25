import Footer from "../shared/Footer";
import PlatformOffering from "../shared/PlatformOfferings";
import Advertisement from "./Advertisement";
import Hero from "./Hero";
import LatestProducts from "./LatestProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <Advertisement />
      <LatestProducts />
      <PlatformOffering />
      <Footer />
    </>
  );
};

export default Home;
