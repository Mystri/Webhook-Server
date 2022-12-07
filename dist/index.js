"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 8014;
app.use(body_parser_1.default.json());
app.post("/webhook", (req, res) => {
    console.log(req);
    console.log(req.params);
    console.log(req.body);
});
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
