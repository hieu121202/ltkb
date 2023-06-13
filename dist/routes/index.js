"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const site_1 = __importDefault(require("./site"));
const login_1 = __importDefault(require("./login"));
const admin_1 = __importDefault(require("./admin"));
const logout_1 = __importDefault(require("./logout"));
// import { checkLogin } from '~/middlewares/requireLogin'
function route(app) {
    app.use('/login', login_1.default);
    app.use('/logout', logout_1.default);
    app.use('/admin', admin_1.default);
    // app.use('/:id',siteRouter)
    //getAll
    // app.get('/u', (req: Request, res: Response) => {
    //   connection.query('SELECT * FROM baiviet', (error, results, fields) => {
    //     if (error) {
    //       console.error('Lỗi truy vấn MySQL:', error);
    //       res.status(500).send('Lỗi truy vấn MySQL');
    //       return;
    //     }
    //     res.send(results);
    //   });
    // });
    //getById
    // app.get('/:id', (req: Request, res: Response) => {
    //   connection.query('SELECT * FROM baiviet where id_baiviet = ?',[req.params['id']] ,(error, results, fields) => {
    //     if (error) {
    //       console.error('Lỗi truy vấn MySQL:', error);
    //       res.status(500).send('Lỗi truy vấn MySQL');
    //       return;
    //     }
    //     res.send(results);
    //   });
    // });
    app.use('/', site_1.default);
}
exports.default = route;
