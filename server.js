const express = require('express');
const path = require('path');
const connectDb = require('./config/db');




const app = express();

//PORT
const PORT = process.env.PORT || 5000;

//connect database
connectDb();

//init middleware
app.use(express.json({extended:false}));

//define routes
app.use("/static", express.static("public"));

//routes
app.use('/api/movie' , require('./routes/addmovie'));







app.listen(PORT , ()=>console.log(`server is started ${PORT}` ));

