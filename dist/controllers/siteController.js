"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baiviet_1 = require("../models/database/baiviet");
const myDataSource_1 = __importDefault(require("../config/myDataSource"));
class siteController {
    static home(req, res, next) {
        // return
        const data = myDataSource_1.default.manager.find(baiviet_1.baiviet);
        data.then(data => res.render('home', { data: data }));
        // res.render('home', {data : data})
        // if (req.isAuthenticated()) {
        //   res.redirect('/admin')
        // }
        // res.redirect('/')
    }
    //GET items
    static site(req, res, next) {
        res.render('site');
    }
}
exports.default = siteController;
