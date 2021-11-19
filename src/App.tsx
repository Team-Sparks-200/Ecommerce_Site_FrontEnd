import React from 'react';
import {Container} from "react-bootstrap";
import Banner from "./component/Banner";
import Footer from "./component/footer/Footer";
import RedirectNavBar from "./component/RedirectNavBar";
import TopNavBar from "./component/TopNavBar";

function App() {
  return (
    <Container fluid={true} className='px-0 '>
      <TopNavBar/>
      <RedirectNavBar/>
      <Banner/>
      <Footer/>
    </Container>
  );
}

export default App;
