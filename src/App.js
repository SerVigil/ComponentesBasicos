import './App.css';
import { useEffect, useState } from 'react';
import {Container, Row, Col, ListGroup, Navbar, Nav, NavDropdown, NavLink} from 'react-bootstrap';
import Peliculas from './Peliculas';

function App() {

  const [peliculas, setPeliculas] = useState([]);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const leerPeliculas = async() =>{

    let response = await fetch('./peliculas.json');
    let data = await response.json();
    setPeliculas(data);
    setPeliculaSeleccionada(data[0]);
  };

  useEffect(() => {
        leerPeliculas();
      
},[]);


  return (
    <>
    <div>
    <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
            <Navbar.Brand href="#home">Menú</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
                    <NavDropdown title="Categorías" id="basic-nav-dropdown">
                      {peliculas.map((pelicula, index)=>
                    <NavDropdown.Item key = "index" href="#action">{pelicula.categoria}</NavDropdown.Item>)}
                    </NavDropdown>
                      <NavDropdown title= "Directores" id='basic-nav-dropdown'>
                      {peliculas.map((pelicula, index)=>
              <NavDropdown.Item href="#action">{pelicula.director}</NavDropdown.Item>)}
                    </NavDropdown>
                  </Nav>
                  </Navbar.Collapse>
           
                  </Container>
                  </Navbar>
    </div>
      ({peliculaSeleccionada && (
      <Row>
        <Col md={8}>
        <img alt = "imagenPrincipal" src = {peliculaSeleccionada.foto} style={{
                maxHeight: "300px", // 🔹 Reducimos el tamaño
                objectFit: "cover",
                borderRadius: "10px",
              }}/>
        </Col>
        <Col md={4}>
        <ListGroup>
          <ListGroup.Item><strong>Titulo: </strong>{peliculaSeleccionada.titulo}</ListGroup.Item>
          <ListGroup.Item><strong>Director: </strong>{peliculaSeleccionada.director}</ListGroup.Item>
          <ListGroup.Item><strong>Actores: </strong>{peliculaSeleccionada.actoresPrincipales.join(', ')}</ListGroup.Item>
          <ListGroup.Item><strong>Sinopsis: </strong>{peliculaSeleccionada.sinopsis}</ListGroup.Item>
          
        </ListGroup>
        </Col>
      </Row>)}
      <Row>
      {peliculas.map((pelicula, index)=>(
        <Col md={3} key={index}>
              <Peliculas pelicula = {pelicula} onSelect={setPeliculaSeleccionada}></Peliculas>

          </Col>
          ))}
      </Row>
      </>
  );
}

export default App;
