"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class adminController {
    static login(req, res, next) {
        // return
        res.render('login', { title: "login", layout: "loginlayout" });
        // if (req.isAuthenticated()) {
        //   res.redirect('/admin')
        // }
        // res.redirect('/')
    }
}
exports.default = adminController;
