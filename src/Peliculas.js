import { Button, Card, ListGroup} from "react-bootstrap";
import React, { useState } from "react";




function Peliculas({pelicula, onSelect}){

    const [verMas, setVerMas] = useState(false);

    return(
        
        <Card>
            <Card.Header>
                <Card.Img variant="top" src={pelicula.foto}></Card.Img>
                <Card.Title><strong>Título: </strong>{pelicula.titulo}</Card.Title>
            </Card.Header>
            <Card.Body>
                <ListGroup>
            <ListGroup.Item>
                <strong>Director: </strong>{pelicula.director}</ListGroup.Item>
            <ListGroup.Item>
                <strong>Actores: </strong>{pelicula.actoresPrincipales.join(', ')}</ListGroup.Item>
                {verMas && (
            <ListGroup.Item>
              <strong>Sinopsis:</strong> {pelicula.sinopsis}
            </ListGroup.Item>
                )}
                </ListGroup>    
            </Card.Body>
            <Card.Body>
                <Button variant="link" onClick={()=>(setVerMas(!verMas))}>Más</Button>
            </Card.Body>
                <Card.Footer>
                    <Button variant="outline-primary" onClick={() => onSelect(pelicula)}>
                Seleccionar</Button>
                </Card.Footer>
        </Card>

    );

}
export default Peliculas;