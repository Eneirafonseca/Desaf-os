import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import { Container, Row, Col } from 'react-bootstrap';
import CardContent from "./components/Card";
import MiFooter from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header
        title="Galería de Imágenes con React"
      />
      <Container fluid className="d-flex justify-content-center align-items-center" style={{ paddingTop: '40px' }}>
        <Row >
          <Col xs={12} sm={6} md={4} style={{ paddingTop: '20px' }}>
            <CardContent
              src="https://picsum.photos/200/100"
              title="Soy un título indefenso"
              description="-Avello Gritando-"
            />
          </Col>
          <Col xs={12} sm={6} md={4} style={{ paddingTop: '20px' }}>
            <CardContent
              src="https://picsum.photos/200/100"
              title="Soy un título indefenso"
              description="-Avello Gritando-"
            />
          </Col>
          <Col xs={12} sm={6} md={4} style={{ paddingTop: '20px' }}>
            <CardContent
              src="https://picsum.photos/200/100"
              title="Soy un título indefenso"
              description="-Avello Gritando-"
            />
          </Col>
          <Col xs={12} sm={6} md={4} style={{ paddingTop: '20px' }}>
            <CardContent
              src="https://picsum.photos/200/100"
              title="Soy un título indefenso"
              description="-Avello Gritando-"
            />
          </Col>
        </Row>
      </Container>
      <MiFooter  />
    </div>
  );
}

export default App;
