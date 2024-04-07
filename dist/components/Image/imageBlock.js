"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_1 = require("./styled");
var captionBlock_1 = __importDefault(require("../Caption/captionBlock"));
function ImageBlock(_a) {
    var block = _a.block;
    var url = block.image.type === 'file'
        ? block.image.file.url
        : block.image.external.url;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(styled_1.Container, { children: (0, jsx_runtime_1.jsx)("img", { src: url, alt: "image" }) }), block.image.caption.length >= 1 && ((0, jsx_runtime_1.jsx)(captionBlock_1.default, { caption: block.image.caption }))] }));
}
exports.default = ImageBlock;
