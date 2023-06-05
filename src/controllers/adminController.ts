import { NextFunction, Router, Request, Response } from 'express'

class adminController {
    public static login(req: Request, res:Response , next:NextFunction) { 
      // return
      res.render('login',{title:"login",layout:"loginlayout"})
      // if (req.isAuthenticated()) {
      //   res.redirect('/admin')
      // }
      // res.redirect('/')
    }
  
    }
  
    
  export default adminController