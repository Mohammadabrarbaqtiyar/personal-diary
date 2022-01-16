const jwt = require("jsonwebtoken");

function authenticate(req, res, next){
    const token = req.body.token
    jwt.verify(token, 'javainuse-secret-key', (err, verified)=>{
        if(err){
            res.status(400).send('Error in token');
        }else{
            next();
        }
    })
}

module.exports = authenticate;