import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { CardGroup,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieCard-style.css';
import { Link } from "react-router-dom"

const MoviesList= ({movies})=>{
    return(
        <div className="movies" >
            {movies.map((mv) => (
                
<CardGroup>
<Card className='bodys'>
  <Card.Img variant="top" src={mv.ImageMovies} className="imgmv" />
  <Card.Body >
    <Card.Title className='dv' >{mv.Title} </Card.Title>
    <Card.Text className='db' >
    {mv.Description}
    </Card.Text>
    <a href= {mv.PosterURL}> Link Movies </a>
    <StarRatingComponent 
                    starCount={5}
                    value={mv.rating}
                />
                <Card.Link>
                <Link to={`/Description/${mv.Title}`} state={{id:mv.id}}> <button type="button"> Description </button></Link>
                </Card.Link>
  </Card.Body>
 
</Card>


</CardGroup>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            ))}
        </div>
    )
}

export default MoviesList;