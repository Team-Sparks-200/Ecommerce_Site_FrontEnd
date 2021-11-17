import React from 'react';
import Banner from "./component/Banner";
import {Container} from "react-bootstrap";

function App() {
  return (
    <Container fluid={true} className='px-0 '>
      <Banner/>
    </Container>
  );
}

export default App;
