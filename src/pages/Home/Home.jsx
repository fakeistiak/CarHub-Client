import Banner from "../Shared/Banner/Banner";
import Blog from "../Shared/Blog/Blog";
import Brands from "../Shared/Brands/Brands";
import ContactUs from "../Shared/ContactUs/ContactUs";
import Hero from "../Shared/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <Hero></Hero>
      <Blog></Blog>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
