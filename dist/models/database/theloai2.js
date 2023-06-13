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
exports.theloai2 = void 0;
const typeorm_1 = require("typeorm");
const baiviet_1 = require("./baiviet");
const theloai_1 = require("./theloai");
let theloai2 = class theloai2 extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], theloai2.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], theloai2.prototype, "tentloai", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => baiviet_1.baiviet, (baiviet) => baiviet.theloai2),
    __metadata("design:type", Array)
], theloai2.prototype, "baiviet", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => theloai_1.theloai, (theloai) => theloai.theloai2),
    __metadata("design:type", Array)
], theloai2.prototype, "theloai", void 0);
theloai2 = __decorate([
    (0, typeorm_1.Entity)()
], theloai2);
exports.theloai2 = theloai2;
