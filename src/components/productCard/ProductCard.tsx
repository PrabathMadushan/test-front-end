import styles from "./ProductCard.module.css"
import {BsSuitHeart} from 'react-icons/bs'
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import CartQtyButton from "../AddToCartButton/CartQtyButton";
import AddToCartButton from "../CartQtyButton/AddToCartButton";

interface IProps {
    image: string;
    title: string;
    description: string;
    priceInUsd: number;
}

const ProductCard = (props: IProps) => {
    return <div className={styles.cardContainer}>
        <div className={styles.cardTop}>
            <a className={styles.link} href={"https://fakestoreapi.com/docs"}>TAP TO VIEW DETAILS</a>
            <div className={styles.imageWrapper}>
                <img className={`w-100 ${styles.productImage}`}
                     src={props.image}
                     alt={props.title}/>
                <div className={styles.iconLove}>
                    <BsSuitHeart/>
                </div>

            </div>
            <h2 className={styles.productName}>{props.title}</h2>
            <p className={`text-truncate ${styles.description}`}>
                {props.description}
            </p>
            <div className="text-end">
                <h1 className={styles.price}>$ {props.priceInUsd}</h1>
            </div>
        </div>
        <Container fluid>
            <Row>
                <Col className="p-0" lg={4}><CartQtyButton/></Col>
                <Col className="p-0" lg={8}><AddToCartButton/></Col>
            </Row>
        </Container>

    </div>
}



export default ProductCard;