import { Col } from "react-bootstrap";

export default function ToppingOptions({ name, imagePath }) {
    return <Col style={{ textAlign: 'center' }} xs={12} s={6} md={4} lg={3} >
        <img style={{ width: '75%' }} src={`http://localhost:3030/${imagePath}`} alt={`${name} topping`} />
    </Col >
}