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
var captionBlock_1 = __importDefault(require("../Caption/captionBlock"));
var styled_1 = require("./styled");
function BookmarkBlock(_a) {
    var block = _a.block;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(styled_1.Container, __assign({ href: block.bookmark.url, target: "_blank" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "content" }, { children: [(0, jsx_runtime_1.jsx)("p", __assign({ className: "title" }, { children: block.bookmark.title })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "description" }, { children: (0, jsx_runtime_1.jsx)("p", { children: block.bookmark.description }) })), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "url" }, { children: [block.bookmark.icon && ((0, jsx_runtime_1.jsx)("img", { src: block.bookmark.icon, alt: "icon" })), (0, jsx_runtime_1.jsx)("p", { children: block.bookmark.url })] }))] })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "image" }, { children: block.bookmark.image && ((0, jsx_runtime_1.jsx)("img", { src: block.bookmark.image, alt: "image" })) }))] })), block.bookmark.caption.length >= 1 && ((0, jsx_runtime_1.jsx)(captionBlock_1.default, { caption: block.bookmark.caption }))] }));
}
exports.default = BookmarkBlock;
