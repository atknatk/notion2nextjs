"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var richTexts_1 = __importDefault(require("../RichText/richTexts"));
var styled_1 = require("./styled");
function TableBlock(_a) {
    var block = _a.block;
    return ((0, jsx_runtime_1.jsx)(styled_1.Container, { children: (0, jsx_runtime_1.jsx)("tbody", { children: block.children &&
                block.children.map(function (child, idx) {
                    var row = child;
                    return ((0, jsx_runtime_1.jsx)("tr", { children: row.table_row.cells.map(function (r, i) { return ((0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)(richTexts_1.default, { richTexts: r }) }, "".concat(idx).concat(i))); }) }, idx));
                }) }) }));
}
exports.default = TableBlock;
