//production mode

module.exports={

    mongoURL:process.env.mongoURL, // original database link in heroku -> settings -> Config vars or add local link
    mode: 'Production',
    msg: 'Hi, you are in production mode'
   
}