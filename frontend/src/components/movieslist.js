import React , {useEffect}from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import { Fragment } from 'react'

const Movieslist = ({getmovies, movie}) => {

     useEffect(() => {
        
      getmovies();
        
    }, [getmovies]);

    return (
        <Fragment>
            
          <div className='container'>
          <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">movieTitle</th>
      <th scope="col">movieReview</th>
      <th scope="col">movieRating</th>
      <th scope="col">movieRealeseYear</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{movie.movieTitle}</td>
      <td>{movie.movieRating}</td>
      <td>{movie.movieReview}</td>
      <td>{movie.movieRealeseYear}</td>
      <button className='btn btn-primary'>update</button>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> 
</div>         
        </Fragment>
    )
}
Movieslist.propTypes = {
    movie:PropTypes.object.isRequired
};


export default connect(null )(Movieslist)
