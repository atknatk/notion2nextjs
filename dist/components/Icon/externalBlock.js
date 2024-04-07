"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var externalStyled_1 = require("./externalStyled");
function ExternalBlock(_a) {
    var external = _a.external;
    return ((0, jsx_runtime_1.jsx)(externalStyled_1.Container, { children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("img", { src: external.external.url, alt: "icon" }) }) }));
}
exports.default = ExternalBlock;
