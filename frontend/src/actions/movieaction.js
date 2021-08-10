import {

    ADD_MOVIE
}
from '../type'
import axios from 'axios'

export const  addmovie =  ( formData)=> async(dispatch)=>{

    const config = {
        headers:{
          'Content-Type':'multipart/form-data'
        }
      };
  
      try {
        const res =  await axios.post('/api/movies' , formData ,  config)
        dispatch({
            type:ADD_MOVIE,
            payload:res.data
        });       
    } catch (err) {
    
       console.log(err.message);
        
    }
    };
   


