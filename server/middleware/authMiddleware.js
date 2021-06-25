import jwt from 'jsonwebtoken' 
import User from '../models/User.js';
const requiringAuth =(req,res,next)=>{
    const token = req.cookies.jwt;
   
    if(token){
        jwt.verify(token,"aymanomer",(err, decodedToken)=>{
            if(err){
                console.log(err.message)
             res.redirect("/signin")
            }else{
                console.log(decodedToken)
                next()
            }
        })
    }else{
        res.redirect("/signin")  
      
    }
}

  const checkingUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token,"aymanomer", async (err, decodedToken) => {
        if (err) {
          res.locals.user = null;
          next();
        } else {
          let user = await User.findById(decodedToken.id);
          res.locals.user = user;
          next();
        }
      });
    } else {
      res.locals.user = null;
      next();
    }
  };

  export { checkingUser, requiringAuth}
