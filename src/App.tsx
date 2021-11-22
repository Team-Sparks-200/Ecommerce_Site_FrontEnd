import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import Banner from "./component/Banner";
import CategoryDataList from "./datalist/CategoryDataList";
import Footer from "./component/footer/Footer";
import CategoryList from "./component/categoryList/CategoryList";

const App: React.FC = () => {
  const [category,setCategory] = useState(CategoryDataList);

  return (
    <Container fluid={true} className='px-0 '>
      <Banner/>
      <CategoryList items={category}/>
      <Footer/>
    </Container>
  );
}

export default App;
