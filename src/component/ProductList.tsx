import React from "react";
import {Container, Row} from "react-bootstrap";
import Product from "./Product/Product";
import {Products} from "../datalist/Products";

const ProductList: React.FC = () => {

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