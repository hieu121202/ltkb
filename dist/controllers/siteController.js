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
    // public static site(req: Request, res:Response , next:NextFunction){
    //   res.render('site')
    // }
    static async homewithId(req, res, next) {
        // const ids = req.params['ids'] ? req.params['ids'].split(',') : [];
        // const data = myDataSource.manager.find(baiviet, {
        //   where: { id: In(ids) }
        // });
        // // data.then(data => res.render('/site', { data: data}));
        // data.then((data) => {res.json(data);
        // })
        // const id = req.params['id'];
        const results = await myDataSource_1.default.getRepository(baiviet_1.baiviet)
            .createQueryBuilder("baiviet")
            .where("baiviet.id = :id", {
            id: req.params['id'],
        })
            .getOne();
        res.render('site', { data: results, layout: "pagelayout" });
    }
}
exports.default = siteController;
