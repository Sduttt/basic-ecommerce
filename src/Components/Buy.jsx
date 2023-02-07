import React, {useState, useEffect} from "react";
import axios from "axios";
import { Lorem} from 'Faker'
import { Container, Col, Row } from "reactstrap";
import CartItem from "./cartitem";

const API_KEY = "9Ekh7JtjwwCni8wQ5tOOsG1HuMA4pT2ox11CpWqeYqr5LZ85tpA8GYKA";
const url = "https://api.pexels.com/v1/search?query=mobile&per_page=6&page=1";

const Buy = ({addInCart}) => {
    const [product, setProduct] = useState([])

    const fetchphoto = async () =>{
        const response = await axios.get(url, {
            headers: {
                authorization: API_KEY
            }
        })
        // console.log(response)

        const  photos  = response.data.photos;

        const allProduct = photos.map(
            photo => ({
                smallImage: photo.src.medium,
                tinyImg: photo.src.tiny,
                name: Lorem.words(),
                price: Math.floor(Math.random()*100000),
                id: photo.id
            })
        )
        setProduct(allProduct)
    }

    useEffect(() => {
        fetchphoto()
    }, [])
    return(
        <Container fluid>
            <h1 className="text-success text-center">
                Buy Page
            </h1>
            <Row>
                {product.map(product => (
                    <Col md={4} key={product.id}>
                        <CartItem product={product} addInCart={addInCart} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
export default Buy;