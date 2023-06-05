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
exports.baiviet = void 0;
const typeorm_1 = require("typeorm");
const theloai_1 = require("./theloai");
let baiviet = class baiviet extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], baiviet.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], baiviet.prototype, "tieude", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], baiviet.prototype, "hinh", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], baiviet.prototype, "trichdan", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], baiviet.prototype, "noidung", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => theloai_1.theloai, (theloai) => theloai.baiviet),
    __metadata("design:type", theloai_1.theloai)
], baiviet.prototype, "theloai", void 0);
baiviet = __decorate([
    (0, typeorm_1.Entity)()
], baiviet);
exports.baiviet = baiviet;
