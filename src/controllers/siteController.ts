import { NextFunction, Router, Request, Response } from 'express'
import { baiviet } from '~/models/database/baiviet'
import myDataSource from '~/config/myDataSource'
import { In, LessThan } from 'typeorm'

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
  // public static site(req: Request, res:Response , next:NextFunction){
  //   res.render('site')
  // }

  public static homewithId(req: Request, res:Response, next:NextFunction){
    // const ids = req.params['ids'] ? req.params['ids'].split(',') : [];
    // const data = myDataSource.manager.find(baiviet, {
    //   where: { id: In(ids) }
    // });
    // // data.then(data => res.render('/site', { data: data}));
    // data.then((data) => {res.json(data);
    // })
    const id = req.params['id'];
    const data= myDataSource.manager.findOne(baiviet, { where: { id: (Number.parseInt(id) ) }})
      .then((data) => {
        if (!data) {
          // Nếu không tìm thấy dữ liệu, trả về lỗi 404 Not Found
          res.status(404).send('Not found');
        } else {
          // Nếu tìm thấy dữ liệu, trả về dưới dạng JSON
          // res.json(data);
          res.render('site', { data: data, layout: "pagelayout" });
        }
      })
      .catch((err) => {
        next(err);
      });
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
