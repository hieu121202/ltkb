import { NextFunction, Router, Request, Response } from 'express'
import session from 'express-session';
import { users } from '~/models/database/users';
import myDataSource from '~/config/myDataSource'
import { getRepository } from 'typeorm';

class loginController {
    public static login(req: Request, res:Response , next:NextFunction) { 
      // return
      res.render('login',{title:"login",layout:"loginlayout"})
      // if (req.isAuthenticated()) {
      //   res.redirect('/admin')
      // }
      // res.redirect('/')
    }
  
//     public static checklogin(req: any, res:any , next:any) { 
//       const { username, password } = req.body;

//       if (username === 'hieunguyen' && password === 'khatmau8') {
//         // Lưu thông tin đăng nhập vào session
//         req.session.loggedIn = true;

//         // Chuyển hướng người dùng đến trang /admin
//         res.redirect('/admin');
//       } else {
//         // Hiển thị thông báo lỗi nếu tài khoản hoặc mật khẩu sai
//         res.render('login', { message: 'Sai tài khoản hoặc mật khẩu' });
//       }
// };
    // public static admin(req: Request, res:Response,next:NextFunction) {
    //   res.render('admin',{title:"admin",layout:""});
    // }
    public static async checklogin(req: Request, res: Response) {
      console.log("checklogin called");
    
      const { username, password } = req.body;
    
      // Check if user exists in the database
      const user = await myDataSource.getRepository(users)
      .createQueryBuilder("users")
      .where("users.taikhoan = :username", {
        username,
      })
      .getOne()

    if (!user || user.matkhau !== password) {
      res.status(401).send('Tài khoản hoặc mật khẩu không đúng');
      return;
    }

    // create a session and redirect to /admin
    (req.session as any).user = user;
    res.redirect('/admin');
    }
}
    
  export default loginController