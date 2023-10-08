import styles from "./ProductCard.module.css"
import {BsSuitHeart} from 'react-icons/bs'
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import CartQtyButton from "../AddToCartButton/CartQtyButton";
import AddToCartButton from "../CartQtyButton/AddToCartButton";

// This is an interface named IProps.
// It defines the expected shape of the 'props' object that will be passed to the ProductCard component.
interface IProps {
    image: string;
    title: string;
    description: string;
    priceInUsd: number;
}

// This is a React functional component named ProductCard.
// It renders a card displaying details of a product.
const ProductCard = (props: IProps) => {
    return <div className={styles.cardContainer}>
        <div className={styles.cardTop}>
            <div className="text-center mb-2" style={{fontSize: "14px"}}><a className={styles.link}
                                                                            href={"https://fakestoreapi.com/docs"}>TAP
                TO VIEW DETAILS</a></div>
            <div className={styles.imageWrapper}>
                <img className={`w-100 ${styles.productImage}`}
                     src={props.image}
                     alt={props.title}/>
                <div className={styles.iconLove}>
                    <BsSuitHeart/>
                </div>

            </div>
            <div className={styles.pNameContainer}><h2 className={styles.productName}>{props.title}</h2></div>
            <div className={styles.descriptionContainer}>
                <p className={`${styles.description}`}>
                    {props.description}
                </p>
            </div>
            <div className="text-end">
                <h1 className={styles.price}>$ {props.priceInUsd}</h1>
            </div>
        </div>
        <Container fluid>
            <Row>
                <Col className="p-0" xs={4}><CartQtyButton/></Col>
                <Col className="p-0" xs={8}><AddToCartButton/></Col>
            </Row>
        </Container>

    </div>
}


export default ProductCard;