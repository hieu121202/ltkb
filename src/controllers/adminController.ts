import { NextFunction, Router, Request, Response } from 'express'
import { baiviet } from '~/models/database/baiviet'
import myDataSource from '~/config/myDataSource'
import { theloai2 } from '~/models/database/theloai2'
import { comment } from '~/models/database/comment'
// const commentRepository = myDataSource.getRepository(comment)

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
        .select('baiviet.*, theloai2.tentloai')
        .from(baiviet, 'baiviet')
        .leftJoinAndSelect(theloai2, 'theloai2', 'theloai2.id = baiviet.theloai2Id')
        .getRawMany()
      data.then((data) => res.render('admin', { layout: "adminlayout", data: data }));
  }

    public static async adminwithId(req: Request, res: Response, next: NextFunction) {
      // const connection = myDataSource.manager.connection
      // const data = await connection
        // .createQueryBuilder()
        // .select(['baiviet', 'theloai2.tentloai as tentloai', 'theloai2.id'])
        // .from(baiviet, 'baiviet')
        // .leftJoin(theloai2, 'theloai2', 'theloai2.id = baiviet.theloai2Id')
        // .createQueryBuilder()
        // .select('baiviet, theloai2.tentloai,theloai2.id')
        // .from(baiviet, 'baiviet')
        // .leftJoin(theloai2, 'theloai2', 'theloai2.id = baiviet.theloai2Id')
        // .where('baiviet.id = :id', {
        //   id: req.params['id']
        // })
        // .getOne()
        {
          const connection = myDataSource.manager.connection
          const data = await connection
            .createQueryBuilder()
            .select(['baiviet.*', 'theloai2.tentloai as tentloai'])
            .from(baiviet, 'baiviet')
            .leftJoin(theloai2, 'theloai2', 'theloai2.id = baiviet.theloai2Id')
            .where('baiviet.id = :id', {
              id: req.query['id']
            })
            .getRawOne() // Lấy ra một đối tượng duy nhất
          res.render('suabaiviet', { data: data, layout: 'adminlayout' })
      }
    }

    // public static async update(req: Request, res: Response, next: NextFunction) {
    //   const { tieude, hinh, trichdan, noidung, theloai } = req.body;
    //   await myDataSource.getRepository(baiviet)
    //     .createQueryBuilder()
    //     .update(baiviet)
    //     .set({ tieude: tieude, hinh: hinh, trichdan: trichdan, noidung: noidung, theloai2: theloai })
    //     .where("baiviet.id = :id", { id: req.query['id'] })
    //     .execute();
    //   res.redirect('/');
    // }
    public static async update(req: Request, res: Response, next: NextFunction) {
      const { tieude, hinh, trichdan, noidung, theloai } = req.body;
      // if (isNaN(id)) {
      //   // xử lý lỗi nếu id không hợp lệ
      //   res.status(400).send('Invalid id');
      //   return;
      // }
      await myDataSource.getRepository(baiviet)
        .createQueryBuilder('baiviet')
        .update()
        .set({ tieude: tieude, hinh: hinh, trichdan: trichdan, noidung: noidung, theloai2: theloai })
        .where("baiviet.id = :id", { id: req.query['id'] })
        .execute();
      res.redirect('/admin');
    }
    // async createbv(req: Request, res: Response, next: NextFunction) {
    //       res.render('baiviet')
    // }

    public static async addBaiviet(req: Request, res: Response, next: NextFunction) {
      // res.json(req.body);
      const { tieude, hinh, trichdan, noidung, theloai } = req.body;
      const bbaiviet = new baiviet();
      bbaiviet.tieude = tieude;
      bbaiviet.trichdan = trichdan;
      bbaiviet.theloai2=theloai;
      bbaiviet.hinh = hinh;
      bbaiviet.noidung = noidung
      bbaiviet.save()
      res.redirect('/')
    } 

    public static async destroy(req: Request, res: Response, next: NextFunction) {
      // console.log('xóa')
      const a= await myDataSource.getRepository(baiviet)
        .createQueryBuilder('baiviet')
        .delete()
        .where("id = :id", { id: req.query['id'] })
        // .getOne();
        // res.json(a);
        .execute();
      res.redirect("/admin");
    }

    public static async cmt(req: Request, res: Response, next: NextFunction) {
      const data = myDataSource.manager
        .createQueryBuilder()
        .select('comment.*')
        .from(comment, 'comment')
        // .leftJoinAndSelect(theloai2, 'theloai2', 'theloai2.id = baiviet.theloai2Id')
        .getRawMany()
      data.then((data) => res.render('cmt', { layout: "adminlayout", data: data }));
  }

  public static async destroycmt(req: Request, res: Response, next: NextFunction) {
    // console.log('xóa')
    const a= await myDataSource.getRepository(comment)
      .createQueryBuilder('comment')
      .delete()
      .where("id = :id", { id: req.query['id'] })
      // .getOne();
      // res.json(a);
      .execute();
    res.redirect("/admin/cmt");
  }
    // public static admin(req: Request, res:Response,next:NextFunction) {
    //   res.render('admin',{title:"admin",layout:""});
    // }
    }
  
    
  export default adminController