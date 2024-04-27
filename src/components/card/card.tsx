import { useEffect, useState } from 'react';
import { axiosInstance } from '../../utils/services/axios.config';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
}

function CardsGrid() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    axiosInstance.get('/character')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Row xs={1} md={4} sm={3} lg={5} className="g-7">
      {characters.map(character => (
        <Col key={character.id}>
          <Card>
            <Card.Img variant="top" src={character.image} />
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
              <Card.Text>Status: {character.status}</Card.Text>
              <Card.Text>Species: {character.species}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardsGrid;
