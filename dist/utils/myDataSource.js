"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("../models/database/User");
const Message_1 = require("../models/database/Message");
const port = process.env.PORT || 3000;
const myDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: process.env.PORT,
    username: 'root',
    password: '',
    database: 'node',
    entities: [User_1.User, Message_1.Message],
    logging: true,
    synchronize: true
});
exports.default = myDataSource;
