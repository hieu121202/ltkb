"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminController_1 = __importDefault(require("../controllers/adminController"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.use('/', adminController_1.default.login);
exports.default = router;
