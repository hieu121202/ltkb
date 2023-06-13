import { NextFunction, Router, Request, Response } from 'express'
import { baiviet } from '~/models/database/baiviet'
import myDataSource from '~/config/myDataSource'
import { theloai2 } from '~/models/database/theloai2'

class adminController {
    // public static admin(req: Request, res:Response , next:NextFunction) { 
    //   // return
    //   res.render('admin',{title:"admin",layout:"adminlayout"})
    //   // if (req.isAuthenticated()) {
    //   //   res.redirect('/admin')
    //   // }
    //   // res.redirect('/')
    // }

    public static baiviet(req: Request, res:Response , next:NextFunction) { 
      // return
      res.render('baiviet',{layout:"adminlayout"})
      // if (req.isAuthenticated()) {
      //   res.redirect('/admin')
      // }
      // res.redirect('/')
    }

    // const bbaiviet = myDataSource.getRepository(baiviet)
    // const ttheloai2 = myDataSource.getRepository(theloai2)
    public static async admin(req: Request, res: Response, next: NextFunction) {
      const data = myDataSource.manager
        .createQueryBuilder()
        .select('baiviet.*, theloai2.tentloai,theloai2.id')
        .from(baiviet, 'baiviet')
        .leftJoin(theloai2, 'theloai2', 'theloai2.id = baiviet.theloai2Id')
        .getRawMany()
      data.then((data) => res.render('admin', { layout: "adminlayout", data: data }));
  }

    public static async adminwithId(req: Request, res: Response, next: NextFunction) {
      const connection = myDataSource.manager.connection
      const data = await connection
        .createQueryBuilder()
        .select(['baiviet', 'theloai2.tentloai as tentloai', 'theloai2.id'])
        .from(baiviet, 'baiviet')
        .leftJoin(theloai2, 'theloai2', 'theloai2.id = baiviet.theloai2Id')
        .where('baiviet.id = :id', {
          id: req.params['id']
        })
        .getOne()
      res.render('baiviet', { data: data, layout: 'adminlayout' })
    }

    // async createbv(req: Request, res: Response, next: NextFunction) {
    //       res.render('baiviet')
    // }

    public static async addBaiviet(req: Request, res: Response, next: NextFunction) {
      // res.json(req.body);
      const { tieude, hinh, trichdan, noidung, theloai2Id } = req.body;
      const bbaiviet = new baiviet();
      bbaiviet.tieude = tieude;
      bbaiviet.trichdan = trichdan;
      bbaiviet.hinh = hinh;
      bbaiviet.noidung = noidung
      bbaiviet.save()
      res.redirect('/')
    } 

  
    // public static admin(req: Request, res:Response,next:NextFunction) {
    //   res.render('admin',{title:"admin",layout:""});
    // }
    }
  
    
  export default adminController