import React, {useState} from 'react';
import TopNavBar from "./NavBars/TopNavBar";
import LogoNavBar from "./NavBars/LogoNavBar";
import RedirectNavBar from "./NavBars/RedirectNavBar";
import Banner from "./Banner/Banner";
import CategoryList from "./CategoryList/CategoryList";
import ProductList from "./Product/ProductList";
import Footer from "./Footer/Footer";
import CategoryDataList from "../datalist/CategoryDataList";
import {Container} from "react-bootstrap";
import Cart from "./Cart/Cart";

const Home: React.FC = () => {
  const [category] = useState(CategoryDataList);

  return (
      <div>
        <Container fluid={true} className='px-0 '>
          <TopNavBar/>
          <LogoNavBar/>
          <RedirectNavBar/>
          <Banner/>
          <Cart/>
          <CategoryList items={category}/>
          <ProductList/>
          <Footer/>
        </Container>
      </div>
  );
};

export default Home;
