import { NextFunction, Router, Request, Response } from 'express'
import { baiviet } from '~/models/database/baiviet'
import myDataSource from '~/config/myDataSource'

class siteController {
  public static home(req: Request, res:Response , next:NextFunction) { 
    // return
  const data = myDataSource.manager.find(baiviet)
    data.then(data => res.render('home', { data: data}))
    // res.render('home', {data : data})
    // if (req.isAuthenticated()) {
    //   res.redirect('/admin')
    // }
    // res.redirect('/')
  }

  //GET items
  public static site(req: Request, res:Response , next:NextFunction){
    res.render('site')
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
