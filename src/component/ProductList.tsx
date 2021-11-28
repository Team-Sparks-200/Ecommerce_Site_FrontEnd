import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Product from "./Product/Product";
import CoconutImage from '../assets/images/Coconut.jpg';
import CarrotImage from '../assets/images/Carrot.jpg';

const ProductList: React.FC = () => {
    //Products Array
    const Products = [
        {
            id: 1,
            name : "Coconut",
            new_price : "65.00",
            old_price : "60.00",
            image : CoconutImage
        },
        {
            id: 2,
            name : "Carrot",
            new_price : "65.00",
            old_price : "60.00",
            image : CarrotImage
        },
        {
            id: 3,
            name : "Coconut",
            new_price : "65.00",
            old_price : "60.00",
            image : CoconutImage
        },
        {
            id: 4,
            name : "Carrot",
            new_price : "65.00",
            old_price : "60.00",
            image : CarrotImage
        },
        {
            id: 5,
            name : "Coconut",
            new_price : "65.00",
            old_price : "60.00",
            image : CoconutImage,
        },
        {
            id: 6,
            name : "Carrot",
            new_price : "65.00",
            old_price : "60.00",
            image : CarrotImage
        },
        {
            id: 7,
            name : "Coconut",
            new_price : "65.00",
            old_price : "60.00",
            image : CoconutImage
        },
        {
            id: 8,
            name : "Carrot",
            new_price : "65.00",
            old_price : "60.00",
            image : CarrotImage
        },
        {
            id: 9,
            name : "Coconut",
            new_price : "65.00",
            old_price : "60.00",
            image : CoconutImage
        },
        {
            id: 10,
            name : "Carrot",
            new_price : "65.00",
            old_price : "60.00",
            image : CarrotImage
        },
        {
            id: 11,
            name : "Coconut",
            new_price : "65.00",
            old_price : "60.00",
            image : CoconutImage
        },
        {
            id: 12,
            name : "Carrot",
            new_price : "65.00",
            old_price : "60.00",
            image : CarrotImage
        }
    ]
    return(
        <Container fluid={true}>
            <Row className="product-list mx-lg-5 mx-md-1 my-5">
                {Products.map((product)=>{
                    return(
                        <Product
                         key={product.id}
                         item={product}
                        />
                    )
                })}
            </Row>
        </Container>
    );
}

export default ProductList;