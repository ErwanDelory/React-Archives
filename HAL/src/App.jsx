import React, { Component } from 'react';
import NavbarWeb from './components/navbar';
import { Button, Card, Container, Form } from 'react-bootstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: '',
    };
  }

  handleInputValueChange = (event) => {
    const { value } = event.target;
    this.setState({ value: value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    fetch(
      `http://api.archives-ouvertes.fr/search/?q=${this.state.value}&wt=json/`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data.response.docs });
      });
  };

  render() {
    return (
      <div>
        <NavbarWeb />
        <Container>
          <Form onClick={this.onSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                Veuillez saisir votre recherche ! (Avec HAL)
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Rechercher..."
                value={this.state.value}
                onChange={this.handleInputValueChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Envoyer
            </Button>
          </Form>

          <br />
          {this.state.data?.map((rech) => (
            <li>
              <Card style={{ width: '60rem' }}>
                <Card.Header>Numéro {rech.docid}</Card.Header>
                <Card.Body>
                  <Card.Title>{rech.label_s}</Card.Title>
                  <Card.Text>{rech.uri_s}</Card.Text>
                </Card.Body>
              </Card>
              <br />
            </li>
          ))}
        </Container>
      </div>
    );
  }
}