import { NextFunction, Router, Request, Response } from 'express'

class adminController {
    public static admin(req: Request, res:Response , next:NextFunction) { 
      // return
      res.render('admin',{title:"admin",layout:""})
      // if (req.isAuthenticated()) {
      //   res.redirect('/admin')
      // }
      // res.redirect('/')
    }

    public static baiviet(req: Request, res:Response , next:NextFunction) { 
      // return
      res.render('baiviet',{layout:""})
      // if (req.isAuthenticated()) {
      //   res.redirect('/admin')
      // }
      // res.redirect('/')
    }
  
    // public static admin(req: Request, res:Response,next:NextFunction) {
    //   res.render('admin',{title:"admin",layout:""});
    // }
    }
  
    
  export default adminController