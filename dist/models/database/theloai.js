"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.theloai = void 0;
const typeorm_1 = require("typeorm");
const theloai2_1 = require("./theloai2");
let theloai = class theloai extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], theloai.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], theloai.prototype, "tentloai", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => theloai2_1.theloai2, (theloai2) => theloai2.theloai),
    __metadata("design:type", Array)
], theloai.prototype, "theloai2", void 0);
theloai = __decorate([
    (0, typeorm_1.Entity)()
], theloai);
exports.theloai = theloai;
