"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var columnBlock_1 = __importDefault(require("../Column/columnBlock"));
var styled_1 = require("./styled");
function ColumnListBlock(_a) {
    var block = _a.block;
    return ((0, jsx_runtime_1.jsx)(styled_1.Container, { children: block.children &&
            block.children.map(function (child, idx) {
                var column = child;
                return (0, jsx_runtime_1.jsx)(columnBlock_1.default, { block: column }, idx);
            }) }));
}
exports.default = ColumnListBlock;
