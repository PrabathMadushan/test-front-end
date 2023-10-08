import styles from "./card.module.css"
import {BsSuitHeart, BsCart2} from 'react-icons/bs'
import {HiMinusSm, HiPlusSm} from 'react-icons/hi'
import React from "react";
import {Col, Container, Row} from "react-bootstrap";

interface IProps {
    image: string;
    title: string;
    description: string;
    priceInUsd: number;
}

const ProductCard = (props: IProps) => {
    return <div className={styles.cardContainer}>
        <div className={styles.cardTop}>
            <a className={styles.link} href={"#"}>TAP TO VIEW DETAILS</a>
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
        <Container>
            <Row>
                <Col className="p-0" lg={4}><CartQtyButton/></Col>
                <Col className="p-0" lg={8}><AddToCartButton/></Col>
            </Row>
        </Container>

    </div>
}

const AddToCartButton = () => {
    return <div className={styles.addToCartButton}>
        <BsCart2/>
        <div className="ps-2">Add to cart</div>
    </div>
}

const CartQtyButton = () => {
    return <div className={styles.cartQtyButton}>
        <div className={styles.btn}><HiMinusSm/></div>
        <div>
            <div className={styles.value}>1</div>
            <div className={styles.des}>Nos</div>
        </div>
        <div className={styles.btn}><HiPlusSm/></div>
    </div>
}

export default ProductCard;