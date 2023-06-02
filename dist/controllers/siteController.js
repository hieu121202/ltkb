"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class siteController {
    static home(req, res, next) {
        // return
        res.render('ta');
        // if (req.isAuthenticated()) {
        //   res.redirect('/admin')
        // }
        // res.redirect('/')
    }
}
exports.default = siteController;
