const mongoose = require('mongoose');

const  addmovieSchema = mongoose.Schema({

    movieTitle:{
        type:String,
        required:true
    },
    movieRating:{
        type:String,
        required:true
    },
    movieReview:{
        type:String
    },
    movieRealeseYear:{

        type:Number

    },
    

});
module.exports = mongoose.model('addbook' , addmovieSchema);