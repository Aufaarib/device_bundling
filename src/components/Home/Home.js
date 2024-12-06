import Footer from "../shared/Footer";
import PlatformOffering from "../shared/PlatformOfferings";
import Hero from "./Hero";
import LatestProducts from "./LatestProducts";
import RecomendedProducts from "./RecomendedProducts";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Advertisement /> */}
      <RecomendedProducts />
      <LatestProducts />
      <PlatformOffering />
      <Footer />
    </>
  );
};

export default Home;
