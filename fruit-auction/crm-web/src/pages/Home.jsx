import FourColumns from "../components/FourColumns";
import Deals from "../components/Deals";
import BestSale from "../components/BestSale";
import PopularProducts from "../components/PopularProducts";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <main className="main">
        <Header />
        {/*End hero slider*/}
        <Category />
        {/*End category slider*/}
        <Banner />
        {/*End banners*/} 
        {/* <PopularProducts /> */}
        {/*Products Tabs*/}
        {/* <BestSale /> */}
        {/*End Best Sales*/}
        <Deals />
        {/*End Deals*/}
        <FourColumns />
        {/*End 4 columns*/}
      </main>
    </>
  );
};

export { Home };
