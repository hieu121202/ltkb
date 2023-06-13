"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../models/database/users");
const myDataSource_1 = __importDefault(require("../config/myDataSource"));
class loginController {
    static login(req, res, next) {
        // return
        res.render('login', { title: "login", layout: "loginlayout" });
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
    static async checklogin(req, res) {
        console.log("checklogin called");
        const { username, password } = req.body;
        // Check if user exists in the database
        const user = await myDataSource_1.default.getRepository(users_1.users)
            .createQueryBuilder("users")
            .where("users.taikhoan = :username", {
            username,
        })
            .getOne();
        if (!user || user.matkhau !== password) {
            res.status(401).send('Invalid username or password');
            return;
        }
        // create a session and redirect to /admin
        req.session.user = user;
        res.redirect('/admin');
    }
}
exports.default = loginController;
