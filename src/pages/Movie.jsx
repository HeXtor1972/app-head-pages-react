import React from 'react'
import data from '../pages/data.json'
import { Button, Card } from 'react-bootstrap'

const Movie = () => {
  return (
    <div>
      {
        data.movies.map(movie => (
            <Card key = {movie.id} style={{width: '18rem' }}>
                <Card.Img variant='top' src={movie.image}/>
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.year}</Card.Text>
                    <Button variant='primary'> Ver Detalle</Button>
                </Card.Body>
            </Card>
        ))
      }
    </div>
  )
}

export default Movie
