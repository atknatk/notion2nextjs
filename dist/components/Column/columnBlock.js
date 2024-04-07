"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var notionBlock_1 = __importDefault(require("../Block/notionBlock"));
var styled_1 = require("./styled");
function ColumnBlock(_a) {
    var block = _a.block;
    return ((0, jsx_runtime_1.jsx)(styled_1.Container, { children: block.children &&
            block.children.map(function (child, idx) { return ((0, jsx_runtime_1.jsx)(notionBlock_1.default, { block: child }, idx)); }) }));
}
exports.default = ColumnBlock;
