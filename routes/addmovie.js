
const express = require('express');
const router = express.Router();
const {check , validationResult} = require('express-validator');
const path = require('path');
const Movie = require('../modules/addmovie');



//route POST api/movie
router.post('/' ,[
    check('movieTitle' , 'movieTitle is required').not().isEmpty(),
    check('movieReview', 'movieReview is required').not().isEmpty(),
    check('movieRating', 'movieRating is required').not().isEmpty(),
    check('movieRealeseYear', 'movieRealeseYear is required').not().isEmpty(),

] , async (req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

   const {movieTitle, movieRating , movieReview, movieRealeseYear}= req.body;

    try {
     
        movie = new Movie({ 
          movieTitle,
          movieRating,
          movieReview,
          movieRealeseYear  
      });
      
      await movie.save();
  
      return res.json('movie added');
         
     }
      catch (err) {
  
        console.error(err.message);
        res.status(500).send("Server Error");
           
       }
        
  
 }); 


//GET Movies
router.get('/' , async(req,res)=>{

  try {

      const movie = await Movie.find();
      res.json(movie);
      
  } catch (err) {

      console.err(err.message);
      res.status(500).send('server error');
      
  }
});

module.exports = router;



