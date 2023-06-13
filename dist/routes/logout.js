"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const session_middleware_1 = require("../middlewares/session.middleware");
const router = (0, express_1.Router)();
router.use(session_middleware_1.sessionMiddleware);
router.get('/', (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal server error');
            return;
        }
        res.clearCookie('connect.sid');
        res.redirect('/login');
    });
});
exports.default = router;
