import React from 'react';
import {Container} from "react-bootstrap";
import Banner from "./component/Banner";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <Container fluid={true} className='px-0 '>
      <Banner/>
      <Footer/>
    </Container>
  );
}

export default App;
