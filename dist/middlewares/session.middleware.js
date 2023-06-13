"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionMiddleware = void 0;
// session.middleware.ts
const express_session_1 = __importDefault(require("express-session"));
exports.sessionMiddleware = (0, express_session_1.default)({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // set secure to true in production
});
