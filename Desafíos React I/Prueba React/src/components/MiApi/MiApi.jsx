import React, { useState, useEffect } from 'react';
import { Badge, Card, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import Filtro from '../Filtro/Filtro';

function MiApi() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState({ name: '', species: '', status: '' });
    const [sort, setSort] = useState('asc');
    const [sortedCharacters, setSortedCharacters] = useState(characters);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(response => {
                setCharacters(response.data.results);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

console.log(characters)

    useEffect(() => {
        const filtered = characters.filter(character => {
            const nameMatch = character.name.toLowerCase().includes(filter.name.toLowerCase());
            const speciesMatch = character.species.toLowerCase().includes(filter.species.toLowerCase());
            const statusMatch = filter.status === '' || character.status === filter.status;
            return nameMatch && speciesMatch && statusMatch;
        });
        const sorted = filtered.sort((a, b) => {
            if (sort === 'asc') {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });
        setSortedCharacters(sorted);
    }, [characters, filter, sort]);

    function handleFilterChange(event) {
        const { name, value } = event.target;
        setFilter(filter => ({ ...filter, [name]: value }));
    }

    function handleSortChange(event) {
        setSort(event.target.value);
    }

    function getBadgeVariant(status) {
        if (status === 'Alive') {
            return 'success';
        } else if (status === 'Dead') {
            return 'danger';
        } else {
            return 'secondary';
        }
    };

    return (
        <div>
            {loading ? <p>Cargando...</p> : (
                <Container fluid>
                    <br></br>
                    <h2 className="text-center mb-4">API Personajes de Rick y Morty</h2>
                    <Row>
                        <br></br>
                        <Col xs={12}>
                            <Filtro filter={filter} onFilterChange={handleFilterChange} />
                            
                            <div className="form-group">
                                <label htmlFor="sort">Ordenar por nombre:</label>
                                <br></br>
                                <select className="form-control" id="sort" value={sort} onChange={handleSortChange}>
                                    <option value="asc">A-Z</option>
                                    <option value="desc">Z-A</option>
                                </select>
                            </div>
                            <br></br>
                        </Col>
                        {sortedCharacters.map(character => (
                            <Col key={character.id} xs={12} sm={6} md={4} lg={3}>
                                <Card className="mb-3" bg="dark" text="light">
                                    <Card.Img variant="top" src={character.image} alt={character.name} />
                                    <Card.Body>
                                        <Card.Title>{character.name}</Card.Title>
                                        <Card.Text>{character.species}</Card.Text>
                                        <Badge bg={getBadgeVariant(character.status)}>{character.status}</Badge>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            )}
            {error ? <p>{error.message}</p> : null}
        </div>
    );
}

export default MiApi;
