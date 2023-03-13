import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navegador() {
    return (
        <>
            <Navbar bg="dark">
                <Container className="justify-content-center">
                    <Navbar.Brand href="#home">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
                            width="100%"
                            height="90"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default Navegador;

