import React, {useState} from 'react';
import TopNavBar from "./TopNavBar";
import LogoNavBar from "./LogoNavBar";
import RedirectNavBar from "./RedirectNavBar";
import Banner from "./Banner";
import CategoryList from "./categoryList/CategoryList";
import ProductList from "./ProductList";
import Footer from "./footer/Footer";
import CategoryDataList from "../datalist/CategoryDataList";
import {Container} from "react-bootstrap";

const Home: React.FC = () => {
  const [category] = useState(CategoryDataList);

  return (
      <div>
        <Container fluid={true} className='px-0 '>
        <TopNavBar/>
        <LogoNavBar/>
        <RedirectNavBar/>
        <Banner/>
        <CategoryList items={category}/>
        <ProductList/>
        <Footer/>
        </Container>
      </div>
  );
};

export default Home;
