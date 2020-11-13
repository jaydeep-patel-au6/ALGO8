const express=require('express')
const bodyparser=require('body-parser')
const cookieParser=require('cookie-parser')
require('./models/db')
const hbs = require('hbs')



//route link
const user = require('./routes/userRoutes')


const app=express()

app.use(bodyparser.urlencoded({extended : false}))
app.use(bodyparser.json())

app.use(cookieParser())

//VIEW ENGINE
app.set("view engine", "hbs");
app.set("views", "views");

app.use('/', user)



const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
});