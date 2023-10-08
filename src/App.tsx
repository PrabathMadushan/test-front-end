import './App.css';
import {Col, Container, Row} from "react-bootstrap";
import ProductCard from "./components/productCard/ProductCard";
import {useQuery} from "@tanstack/react-query";
import {MagnifyingGlass} from 'react-loader-spinner'
import {TbFaceIdError} from 'react-icons/tb'

// This is an interface defining the shape of the data received from the API.
interface ResponseDTO {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string
}

function App() {
    // This is a React Query hook that fetches data from an API.
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

    // If there's an error, display an error message.
    if (error) return <div className="background">
        <div className="text-center">
            <div><TbFaceIdError style={{fontSize: "46px"}}/></div>
            <div>An error has occurred</div>
        </div>
    </div>

    // If data is still loading, display a loading indicator.
    return <div className="App">
        <Container fluid className="p-0">
            {isLoading ? <div className="background">
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
                {data && data.map((product, index) =>
                    <Col className="py-2" md={6} lg={3}>
                        {/* This is a ProductCard component */}
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
