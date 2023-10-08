import React, {useState} from 'react';
import './App.css';
import {Col, Container, Row} from "react-bootstrap";
import ProductCard from "./components/productCard";

interface Product {
    image: string;
    title: string;
    description: string;
    priceInUsd: number;
}

function App() {
    const [products, setProducts] = useState<Product[]>(
        [
            {
                image: 'https://www.rudecru.com/eu/27680-large_default/premium-t-shirt-red.jpg',
                title: 'Red Shirt',
                description: 'A comfortable red shirt made from soft cotton.',
                priceInUsd: 19.99
            },
            {
                image: 'https://scene7.zumiez.com/is/image/zumiez/product_main_medium/Unionbay-Madonna-Archive-Dark-Blue-Jeans-_331086-front-US.jpg',
                title: 'Blue Jeans',
                description: 'Classic blue jeans with a relaxed fit.',
                priceInUsd: 29.99
            },
            {
                image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nike-running-shoe-buying-guide-refresh-lead-64517574cc201.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*',
                title: 'Running Shoes',
                description: 'High-performance running shoes for athletes.',
                priceInUsd: 49.99
            },
            {
                image: 'https://i0.wp.com/www.ninetynine.lk/wp-content/uploads/2020/11/gfhgj.png?resize=750%2C750&ssl=1',
                title: 'Leather Wallet',
                description: 'A stylish leather wallet with multiple compartments.',
                priceInUsd: 39.99
            },
            {
                image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18809060/2023/8/25/733ff3c2-2d1e-4656-89d9-f4e2602f71411692960614643-Voyage-Unisex-Black-Lens--Black-Wayfarer-Sunglasses-with-UV--2.jpg',
                title: 'Sunglasses',
                description: 'Fashionable sunglasses with UV protection.',
                priceInUsd: 14.99
            },
            {
                image: 'https://cdn.shopify.com/s/files/1/0575/5047/1307/files/lp-hardcase-l.jpg',
                title: 'Smartphone Case',
                description: 'Durable case for various smartphone models.',
                priceInUsd: 9.99
            },
            {
                image: 'https://hips.hearstapps.com/hmg-prod/images/wireless-earbuds-1661183784.jpg',
                title: 'Wireless Earbuds',
                description: 'High-quality wireless earbuds with noise cancellation.',
                priceInUsd: 79.99
            },
            {
                image: 'https://di2ponv0v5otw.cloudfront.net/posts/2022/11/03/6363ec68f6bd8879c52c0ac5/m_6363ec69c9a228390130e014.jpeg',
                title: 'Ceramic Mug',
                description: 'A beautifully crafted ceramic mug for hot beverages.',
                priceInUsd: 12.50
            }
        ]
    );
    return <div className="App">
        <Container fluid>
            <Row>
                {products.map((product, index) => <Col className="py-2" lg={3}><ProductCard
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    priceInUsd={product.priceInUsd}
                /></Col>)}

            </Row>
        </Container>

    </div>;
}

export default App;
