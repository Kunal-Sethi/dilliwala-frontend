// import FrontPageCarousel from "../components/HomePage/FrontPageCarousel";
import FrontPageCarousel2 from "../components/HomePage/FrontPageCarousel2";
// import ProductSlider from "../components/HomePage/ProductSlider";
import ProductSlider2 from "../components/HomePage/ProductSlider2";

function HomePage() {
  return (
    <>
      {/* <FrontPageCarousel /> */}
      <FrontPageCarousel2 />
      <ProductSlider2 heading="Whats Hot" />
      <ProductSlider2 heading="Whats Trending" />
      <ProductSlider2 heading="New Products" />
      <ProductSlider2 heading="Fresh picks from local farmers" />
      {/* <ProductSlider heading="Whats Hot" />
      <ProductSlider heading="Whats Trending" />
      <ProductSlider heading="New Products" />
      <ProductSlider heading="Fresh picks from local farmers" /> */}
    </>
  );
}

export default HomePage;
