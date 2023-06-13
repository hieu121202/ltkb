"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loginController_1 = __importDefault(require("../controllers/loginController"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/', loginController_1.default.checklogin);
router.use('/', loginController_1.default.login);
exports.default = router;
