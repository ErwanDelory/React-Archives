import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="home">
      <br />
      <Button variant="success" href="/hal">
        HAL
      </Button>{' '}
      <Button variant="warning" href="/arxiv">
        arXiv
      </Button>
    </Container>
  );
};
export default Home;
