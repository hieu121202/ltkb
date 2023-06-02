import { NextFunction, Router, Request, Response } from 'express'

class siteController {
  public static home(req: Request, res:Response , next:NextFunction) { 
    // return
    res.render('home')
    // if (req.isAuthenticated()) {
    //   res.redirect('/admin')
    // }
    // res.redirect('/')
  }
//   public static index(req: any, res: any, next: any) {
//     // return
//     if (req.isAuthenticated()) {
//       res.redirect('/admin')
//     }
//     res.redirect('/')
//   }
//   public static create(req: any, res: any, next: any) {
//     return
  }

  
export default siteController
