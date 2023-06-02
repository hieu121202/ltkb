"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const site_1 = __importDefault(require("./site"));
function route(app) {
    app.use('/', site_1.default);
}
exports.default = route;
