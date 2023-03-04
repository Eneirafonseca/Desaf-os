import { Container, Alert } from 'react-bootstrap';

function MiFooter() {
    return (
        <Container className=" miFooter bg-light text-dark py-3 text-center" >
                <p className="mb-0 ">Es una galería de imágenes que se genera de manera random</p>
                <Alert variant='secondary'> Sí, se genera aleatoriamente </Alert>
        </Container>
    );
}

export default MiFooter;
