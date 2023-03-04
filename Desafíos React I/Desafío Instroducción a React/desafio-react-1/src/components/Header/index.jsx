import { Container, Navbar } from 'react-bootstrap';

const Header = props => {
    const { title } = props
    return (
        <Navbar bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand href="#home">
                    <h1>{title}</h1>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
};

export default Header;