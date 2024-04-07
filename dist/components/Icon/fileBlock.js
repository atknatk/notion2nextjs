"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var fileStyled_1 = require("./fileStyled");
function FileBlock(_a) {
    var file = _a.file;
    return ((0, jsx_runtime_1.jsx)(fileStyled_1.Container, { children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("img", { src: file.file.url, alt: "icon" }) }) }));
}
exports.default = FileBlock;
