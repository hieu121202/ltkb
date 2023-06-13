"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminController_1 = __importDefault(require("../controllers/adminController"));
const session_middleware_1 = require("../middlewares/session.middleware");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.use(session_middleware_1.sessionMiddleware);
router.use('/baiviet', adminController_1.default.baiviet);
router.use('/', auth_middleware_1.isLoggedIn, adminController_1.default.admin);
exports.default = router;
