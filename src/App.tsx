import './App.css';
import {Col, Container, Row} from "react-bootstrap";
import ProductCard from "./components/productCard/ProductCard";
import {useQuery} from "@tanstack/react-query";
import {MagnifyingGlass} from 'react-loader-spinner'

interface ResponseDTO {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string
}

function App() {

    // Access the client


    const {isLoading, error, data} = useQuery({
        queryKey: ["products"],
        queryFn: () => fetch("https://fakestoreapi.com/products").then(res => res.json()),
        select: (data: ResponseDTO[]) => {
            return data.map(d => ({
                id: d.id,
                image: d.image,
                title: d.title,
                description: d.description,
                priceInUsd: d.price,
            }))
        },

    })
    return <div className="App">

        <Container fluid>
            {isLoading ? <div className="loading">
                <MagnifyingGlass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="MagnifyingGlass-loading"
                    wrapperStyle={{}}
                    wrapperClass="MagnifyingGlass-wrapper"
                    glassColor='#c0efff'
                    color='#e15b64'
                />
            </div> : <Row>
                {data && data.map((product, index) => <Col className="py-2" lg={3}>
                    <ProductCard
                        key={index}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        priceInUsd={product.priceInUsd}
                    /></Col>)}

            </Row>}

        </Container>

    </div>;
}

export default App;
