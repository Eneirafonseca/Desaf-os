import { Card, Button } from 'react-bootstrap';

const CardContent = props => {
    const{src, title, description} = props
    return (
        <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src={src}></Card.Img>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="dark">Hola</Button>
            </Card.Body>
        </Card>
    );
};

export default CardContent;