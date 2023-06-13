"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class adminController {
    static admin(req, res, next) {
        // return
        res.render('admin', { title: "admin", layout: "" });
        // if (req.isAuthenticated()) {
        //   res.redirect('/admin')
        // }
        // res.redirect('/')
    }
    static baiviet(req, res, next) {
        // return
        res.render('baiviet', { layout: "" });
        // if (req.isAuthenticated()) {
        //   res.redirect('/admin')
        // }
        // res.redirect('/')
    }
}
exports.default = adminController;
