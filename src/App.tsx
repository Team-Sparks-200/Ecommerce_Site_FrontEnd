import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import Banner from "./component/Banner";
import Footer from "./component/footer/Footer";
import RedirectNavBar from "./component/RedirectNavBar";
import TopNavBar from "./component/TopNavBar";
import CategoryDataList from "./datalist/CategoryDataList";
import CategoryList from "./component/categoryList/CategoryList";
import ProductList from "./component/ProductList";
import LogoNavBar from "./component/LogoNavBar"

function App() {

    const [category] = useState(CategoryDataList);

  return (
    <Container fluid={true} className='px-0 '>
      <TopNavBar/>
      <LogoNavBar />
      <RedirectNavBar/>
      <Banner/>
      <CategoryList items={category}/>
      <ProductList/>
      <Footer/>
    </Container>
  );
}

export default App;
