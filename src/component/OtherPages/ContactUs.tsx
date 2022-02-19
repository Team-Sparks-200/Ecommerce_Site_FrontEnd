import React from 'react';
import {Col, Row} from "react-bootstrap";
import RedirectNavBar from "../NavBars/RedirectNavBar";
import LogoNavBar from "../NavBars/LogoNavBar";
import TopNavBar from "../NavBars/TopNavBar";
import Footer from "../Footer/Footer";

const ContactUs: React.FC = () => {
  return (
      <React.Fragment>
        <TopNavBar/>
        <LogoNavBar/>
        <RedirectNavBar/>
        <Row className='mx-0'>
          <Col xs={12} className="text-lg-center">
            <h1 className="my-3 ps-md-2 ps-2">Contact Us</h1>
          </Col>
          <Col xs={12} lg={6} className='m-auto text-center py-1'>
            <p className='font-monospace my-0 pb-2'>This is Cart app developed by SPARKS.We
              used React typescript, Functional components, React hooks, React Bootstrap, React- Select dependencies &
              React Number Format. In this, I have followed the agile approach & branching workflow when working on this
              Project. As well as This is also mobile responsive and all User experience is there and has a
              pixel-perfect
              design. </p>
          </Col>
        </Row>
        <Footer/>
      </React.Fragment>
  );
};

export default ContactUs;
