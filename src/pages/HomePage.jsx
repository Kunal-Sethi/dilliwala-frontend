import FrontPageCarousel from "../components/HomePage/FrontPageCarousel";
import ProductSlider from "../components/HomePage/ProductSlider";

function HomePage() {
  return (
    <>
      <FrontPageCarousel />
      <ProductSlider heading="Whats Hot" />
      <ProductSlider heading="Whats Trending" />
      <ProductSlider heading="New Products" />
      <ProductSlider heading="Fresh picks from local farmers" />
    </>
  );
}

export default HomePage;
