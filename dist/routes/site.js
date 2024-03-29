"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const siteController_1 = __importDefault(require("../controllers/siteController"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.use('/:id', siteController_1.default.homewithId);
router.use('/', siteController_1.default.home);
exports.default = router;
