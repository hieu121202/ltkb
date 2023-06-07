import { NextFunction, Router, Request, Response } from 'express'

class loginController {
    public static login(req: Request, res:Response , next:NextFunction) { 
      // return
      res.render('login',{title:"login",layout:"loginlayout"})
      // if (req.isAuthenticated()) {
      //   res.redirect('/admin')
      // }
      // res.redirect('/')
    }
  
    // public static admin(req: Request, res:Response,next:NextFunction) {
    //   res.render('admin',{title:"admin",layout:""});
    // }
    }
  
    
  export default loginController