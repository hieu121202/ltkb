// import { NextFunction } from "express";

// function requireLogin(req:Request, res:Response, next:NextFunction) {
//     if (req.session && req.session.user) { // Kiểm tra người dùng đã đăng nhập hay chưa
//       next(); // Cho phép truy cập vào trang quản trị
//     } else {
//       res.redirect('/login'); // Chuyển hướng đến trang đăng nhập
//     }
//   }