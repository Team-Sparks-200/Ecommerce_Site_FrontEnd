import React from 'react';
import {Row, Image, Button,Col} from "react-bootstrap";
import Banner_Img from "../assets/images/Bannner_Img.webp";
import Leaf_Img from "../assets/images/double_leaf.webp"

const Banner: React.FC = () => {
  return (
      <Row className="px-0 mx-0">
        <Image src={Banner_Img} alt="Banner" className='px-0' />
        <Col xl={4} className='banner-text'>
          <Image src={Leaf_Img} alt="Leaf" className='leaf mb-3'/>
          <h4>100% Healthy & Affordable</h4>
          <h1>Organic Vegetables</h1>
          <h4>Small Chages Big Difference</h4>
          <Button className='mt-2 px-3 py-2' variant="light">Shop Now</Button>
        </Col>
      </Row>
  );
};

export default Banner;
