const express=require('express')
const bodyparser=require('body-parser')
const cookieParser=require('cookie-parser')

//route link
const user = require('./routes/userRoutes')


const app=express()

app.use(bodyparser.urlencoded({extended : false}))
app.use(bodyparser.json())
app.use(cookieParser())


app.use('/', user)

const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
});