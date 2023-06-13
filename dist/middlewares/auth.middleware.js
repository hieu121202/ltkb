"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLoggedIn = void 0;
const isLoggedIn = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    next();
};
exports.isLoggedIn = isLoggedIn;
