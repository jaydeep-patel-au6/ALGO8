const User = require('../models/userModel')
const {auth} = require('../middlewares/auth')



class user {

    homePage(req, res){
        res.status(200).send('login sucessfull');
    }

    signUp(req, res){
    
        const newuser=new User(req.body);
        
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

}

module.exports = user