import {

    ADD_MOVIE, GET_MOVIE, MOVIE_ERROR
}
from '../type'
import axios from 'axios'

export const  addmovie =  (addmovie)=> async(dispatch)=>{

    const config = {
        headers:{
          'Content-Type':'application/json'
        }
      };
  
      try {
        const res =  await axios.post('/api/movie' , addmovie,  config)
        dispatch({
            type:ADD_MOVIE,
            payload:res.data
        });       
    } catch (err) {
    
       console.log(err.message);
        
    }
    };


    //GET BOOKS
export const getmovies =()=> async dispatch =>{

  try {
      const res =  await axios.get('/api/movie')
      dispatch({
          type:GET_MOVIE,
          payload:res.data
      })
  } catch (error) {

      dispatch({
          type:MOVIE_ERROR
      })
      
  }
};

   


