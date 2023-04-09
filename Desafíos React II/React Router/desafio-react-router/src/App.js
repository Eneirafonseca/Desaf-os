import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import CustomNavbar from './components/Navbar';
import Home from './components/Home';
import Contacto from './components/Contacto';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
