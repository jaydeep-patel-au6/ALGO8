const User = require('../models/userModel')
const {auth} = require('../middlewares/auth')



class user {

    homePage(req, res){
        res.status(200).send('login sucessfull');
    }

    //register user
    signUp(req, res){
    
        const newuser = new User(req.body);
        
        if(newuser.password!=newuser.password2)return res.status(400).json({message: "password does not match"});
            
            User.findOne({email:newuser.email},function(err,user){

                if(user) return res.status(400).json({ auth : false, message :"alrady register with this email"});
        
                newuser.save((err,doc)=>{
                    if(err) {console.log(err);
                        return res.status(400).json({ success : false});}
                    res.status(200).json({
                        succes:true,
                        user : doc
                    });
                });
            });
        }

        //login user
        login(req, res){
    
            let token=req.cookies.auth;
          
            User.findByToken(token,(err,user)=>{
                if(err) return  res(err)
                if(user) return res.status(400).json({
                    error :true,
                    message:"You are already logged in"
                })
            
                else{
                    User.findOne({'email':req.body.email},function(err,user){
                        if(!user) return res.json({isAuth : false, message : 'Register First'})
                
                        user.comparepassword(req.body.password,(err,isMatch)=>{
                            if(!isMatch) return res.json({ isAuth : false,message : "password does not match" })
                
                        user.generateToken((err,user)=>{
                            if(err) return res.status(400).send(err)
                            res.cookie('auth',user.token).json({
                                isAuth : true,
                                id : user._id
                                ,email : user.email
                            })
                            
                        }) 
                    })
                })
                }
            })
        }

        //profile if user logged in
        profile(req, res){
            
            res.json({
                isAuth: true,
                id: req.user._id,
                email: req.user.email,
                name: req.user.firstname + req.user.lastname
                
            })
        }

        //user logout
        logout(req, res){

            req.user.deleteToken(req.token,(err,user)=>{
                if(err) return res.status(400).send(err)
                res.sendStatus(200).json({
                    msg:'logout'
                })
            })
        }

        

}

module.exports = user