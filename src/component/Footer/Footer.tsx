import React from 'react';
import {BsFacebook, BsLinkedin, BsPinterest, BsRssFill, BsTwitter, BsYoutube} from "react-icons/bs";
import {Col, Row} from "react-bootstrap";

const Footer: React.FC = () => {
  return (
      <Row className='footer d-flex align-items-center justify-content-center mx-0'>
        <Col xl={4} lg={6} md={8}>
            <Row className='mt-4'>
              <Col className='d-flex justify-content-between'>
                <h5>ABOUT US</h5>
                <h5>FAQ</h5>
                <h5>DELIVERY INFO</h5>
                <h5>CONTACT US</h5>
              </Col>
            </Row>
            <Row className='d-flex justify-content-center my-4'>
             <Col lg={7} md={8} xs={8} className='d-flex justify-content-between'>
               <BsFacebook className='icon'/>
               <BsTwitter className='icon'/>
               <BsLinkedin className='icon'/>
               <BsPinterest className='icon'/>
               <BsYoutube className='icon'/>
               <BsRssFill className='icon'/>
             </Col>
            </Row>
            <Row className='d-flex justify-content-center mb-4 pb-1'>
              <Col className='text-center copyright d-flex flex-md-row flex-column'>
                Copyright &copy; 2021. All Rights Reserved.&nbsp; <span> Powered By SPARKS</span>
              </Col>
            </Row>
        </Col>
      </Row>
  );
};

export default Footer;
