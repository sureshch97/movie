import React , {useEffect}from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
  import Movielist from './movieslist'
  import Movieform from './movieform'
  import { getmovies } from '../actions/movieaction'
  
  export const Home = ({getmovies, movie:{movie}}) => {

    useEffect(() => {
        
        getmovies();
          
      }, [getmovies]);

      return (
          <div className='grid-2'>
              <div>
              <Movieform/>
              </div>
              <div className='py-5 my-5'>
              {movie.map( movie => <Movielist movie={movie}/>)}
              </div>       
          </div>
      )
  }
Home.propTypes = {
    getmovies:PropTypes.func.isRequired,
    movie:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    movie: state.movie,
 
 });
 export default connect(mapStateToProps,{ getmovies})(Home)
  