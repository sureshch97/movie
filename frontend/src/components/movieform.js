import React,  { useState,  Fragment } from 'react'
import { addmovie } from '../actions/movieaction';
import  movielist from './movieslist'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const Movieform = ({addmovie, history}) => {

    const [movieTitle, setmovieTitle] = useState('');
    const [movieRating, setmovieRating] = useState('');
    const [movieReview, setmovieReview] = useState('');
    const [movieRealseYear, setmovieReleaseYear] = useState('');

    const onsubmit=(e)=>{
        e.preventDefault();
         addmovie(movieRating, movieRealseYear, movieReview, movieTitle, history);
        
    }

    return (
        <Fragment>
         <form className='container m-5' onSubmit={onsubmit}>
             <h3 className=' px-3'>Movie Form</h3>
             <div className='form-group'>
                 
                 <input type='text' placeholder='movieTitle' 
                 onChange={e=> setmovieTitle(e.target.value)}></input>
             </div>
             <div className="input-field col s12">
                <select  onChange={e=> setmovieRating(e.target.value)}>
                 <option value='0' disabled>movieRating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </select>
               
            </div>

             <div className='form-group'>
             
             <select onChange={e=> setmovieReview(e.target.value)}>
             <option value='0' disabled>movieReview</option>
                  <option>good</option>
                  <option>Average</option>
                  <option>Bad</option>
                  
              </select>
             </div>

             <div className='form-group'>
             <input type='text' placeholder='movieRealseYear' onChange={e=> setmovieReleaseYear(e.target.value)}></input>
              
             </div>
             <button className='btn btn-primary' type='submit'>Submit</button>
             
         </form>
         
        </Fragment>
    )
}
Movieform.propTypes={
    addmovie:PropTypes.func.isRequired,
  }
  export default connect(null , {addmovie})(Movieform)
