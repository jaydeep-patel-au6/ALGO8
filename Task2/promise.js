const express = require('express')
const app = express()
const PORT = process.env.port || 3001


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

// success msg
const done = (movies) => { 
    return `movie name ${movies.name}`
    
}

// fail msg
const notDone = () => { 
    return `movie not found`
}

//find
const findMovie = (id1) => { 
    return new Promise(function (resolve, reject) { 
        
        const movie1 = movies.find(function (value) { 
            return value.id == id1; 
        })

        if (movie1) { 
            resolve(
                movie1
               
                ); 
        } 
        else { 
            reject(
               
            ); 
        } 
    }); 
} 

app.get('/:id', async (req, res)=>{
    
    let id = req.params.id
    let movieName = await findMovie(id)
        .then(
            done
            )
        .catch(
            notDone
        )

    res.send(movieName)
    
})



app.listen(PORT, ()=>{
    console.log(`server runs on port ${PORT}`)
})