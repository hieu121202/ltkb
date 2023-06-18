import { NextFunction, Router, Request, Response } from 'express'
import { baiviet } from '~/models/database/baiviet'
import myDataSource from '~/config/myDataSource'
import { In, LessThan } from 'typeorm'
import { theloai2 } from '~/models/database/theloai2'
import { comment } from '~/models/database/comment'

const theloaiRepository = myDataSource.getRepository(theloai2)
const baivietRepository = myDataSource.getRepository(baiviet)
const commentRepository = myDataSource.getRepository(comment)

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

  public static async homewithId(req: Request, res:Response, next:NextFunction){
    // const ids = req.params['ids'] ? req.params['ids'].split(',') : [];
    // const data = myDataSource.manager.find(baiviet, {
    //   where: { id: In(ids) }
    // });
    // // data.then(data => res.render('/site', { data: data}));
    // data.then((data) => {res.json(data);
    // })
    // const id = req.params['id'];
    const results = await myDataSource.getRepository(baiviet)
      .createQueryBuilder("baiviet")
      // .where("baiviet.id = :id", {
      //   id: req.params['id'],
      // })
      // .getOne()
      .leftJoinAndSelect("baiviet.comment", "comment")
      .where("baiviet.id = :id", { id: req.params['id'] })
      .getOne();
      res.render('site', { data: results, layout: "pagelayout" });
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
  public static async menu(req: Request, res: Response, next: NextFunction) {
    // let theloai2Id;
    // if (req.path === '/su-kien') {
    //   theloai2Id = 1; // ID của thể loại giải trí
    // } else if (req.path === '/giai-thuong') {
    //   theloai2Id = 2; // ID của thể loại sự kiện
    // }else if (req.path === '/goc-cam-nhan') {
    //   theloai2Id = 3; // ID của thể loại sự kiện
    // }else if (req.path === '/tac-gia') {
    //   theloai2Id = 4; // ID của thể loại sự kiện
    // }else if (req.path === '/du-lich') {
    //   theloai2Id = 5; // ID của thể loại sự kiện
    // }else if (req.path === '/diem-tin-sach') {
    //   theloai2Id = 6; // ID của thể loại sự kiện
    // }else if (req.path === '/top-10') {
    //   theloai2Id = 7; // ID của thể loại sự kiện
    // }else if (req.path === '/phim-chuyen-the') {
    //   theloai2Id = 8; // ID của thể loại sự kiện
    // }else if (req.path === '/cong-viec') {
    //   theloai2Id = 9; // ID của thể loại sự kiện
    // }else if (req.path === '/nghe-thuat-song') {
    //   theloai2Id = 10; // ID của thể loại sự kiện
    // }else if (req.path === '/suc-khoe') {
    //   theloai2Id = 11; // ID của thể loại sự kiện
    // }else if (req.path === '/light-novel') {
    //   theloai2Id = 12; // ID của thể loại sự kiện
    // }

    const data = await baivietRepository
      .createQueryBuilder('baiviet')
      // .select('baiviet.*, theloai2.tentloai,theloai2.id')
      // .from(baiviet, 'baiviet')
      .leftJoinAndSelect('baiviet.theloai2' ,'theloai2')
      .where('baiviet.theloai2.id = :id', {  id: req.params['id'], })
      .getMany()
      res.render('home', { data: data})
      // data.then(data => res.json(data));
  }

  public static async menu1(req: Request, res: Response, next: NextFunction) {
    const data = await baivietRepository
      .createQueryBuilder('baiviet')
      .leftJoinAndSelect('baiviet.theloai2', 'theloai2')
      .leftJoinAndSelect('theloai2.theloai', 'theloai')
      .where('theloai.id = :id', {  id: req.params['id'], })
      .getMany();
    res.render('home', { data: data });
  }

  public static async search(req: Request, res: Response, next: NextFunction) {
    const query = req.query['q'];
  
    const data = await baivietRepository
      .createQueryBuilder('baiviet')
      // .leftJoinAndSelect('baiviet.theloai', 'theloai')
      .where('baiviet.tieude LIKE :query', { query: `%${query}%` })
      .getMany();
  
    res.render('home', { data: data, query: query });
  }

  public static async addComment(req: Request, res: Response, next: NextFunction) {
    // res.json(req.body);
    console.log('test addComment');
    const { name, noidung,baivietId} = req.body;
    const ccomment = new comment();
    ccomment.name = name;
    ccomment.noidung = noidung;
    ccomment.baiviet =baivietId;
    ccomment.save()
    res.redirect('/')
  } 
  }



  
export default siteController
