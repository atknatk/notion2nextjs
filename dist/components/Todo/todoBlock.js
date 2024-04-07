"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var richTexts_1 = __importDefault(require("../RichText/richTexts"));
var notionBlock_1 = __importDefault(require("../Block/notionBlock"));
var styled_1 = require("./styled");
function TodoBlock(_a) {
    var block = _a.block;
    return ((0, jsx_runtime_1.jsxs)(styled_1.Container, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "box ".concat(block.to_do.checked ? 'checked' : 'notChecked') }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "checkbox" }, { children: (0, jsx_runtime_1.jsx)("div", { children: block.to_do.checked ? ((0, jsx_runtime_1.jsx)("svg", __assign({ role: "graphics-symbol", viewBox: "0 0 14 14" }, { children: (0, jsx_runtime_1.jsx)("polygon", { points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039" }) }))) : ((0, jsx_runtime_1.jsx)("svg", __assign({ role: "graphics-symbol", viewBox: "0 0 16 16" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.5,1.5 L1.5,14.5 L14.5,14.5 L14.5,1.5 L1.5,1.5 Z M0,0 L16,0 L16,16 L0,16 L0,0 Z" }) }))) }) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "content" }, { children: (0, jsx_runtime_1.jsx)(richTexts_1.default, { richTexts: block.to_do.rich_text }) }))] })), block.has_children && ((0, jsx_runtime_1.jsx)("div", __assign({ className: "children" }, { children: block.children &&
                    block.children.map(function (child, idx) { return ((0, jsx_runtime_1.jsx)(notionBlock_1.default, { block: child }, idx)); }) })))] }));
}
exports.default = TodoBlock;
