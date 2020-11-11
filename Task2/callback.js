const express = require('express')
const app = express()
const PORT = process.env.port || 3000


const movies = [
    {
        id: 1,
        name: 'Jumanji'
    },
    {
        id: 2,
        name: 'Avatar'
    },
    {
        id: 3,
        name: 'Terminal'
    },
    {
        id: 4,
        name: 'The Green Mile'
    },{
        id: 5,
        name: '2012'
    }
]

// callback function 
const callbackMovie = (err, movies) => { 
    if(err) { 
        return `movie id  ${err} not found`
        
    } 
    else { 
        return  `movie name ${movies.name}`
    } 
} 

// pass id and callback function
const findMovie = (movieId, callback1) => { 
    let movie = movies.find(function(value1) { 
        return value1.id == movieId; 
    }); 
  
    // movie not found 
    if(typeof movie == 'undefined')  { 
        return callback1(movieId, false); 
    } 
    //movie found
    else { 
       return callback1(null, movie); 
    } 
} 
  

app.get('/:id', (req, res)=>{
    res.send(findMovie(req.params.id, callbackMovie));
})



app.listen(PORT, ()=>{
    console.log(`server runs on port ${PORT}`)
})