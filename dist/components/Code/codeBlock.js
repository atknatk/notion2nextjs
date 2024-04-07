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
var react_highlight_1 = __importDefault(require("react-highlight"));
require("highlight.js/styles/github.css");
var richTexts_1 = __importDefault(require("../RichText/richTexts"));
var captionBlock_1 = __importDefault(require("../Caption/captionBlock"));
var styled_1 = require("./styled");
function CodeBlock(_a) {
    var block = _a.block;
    var data = block.code.rich_text.map(function (text) { return text.plain_text; });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(styled_1.Container, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "copyButton" }, { children: (0, jsx_runtime_1.jsxs)("button", __assign({ onClick: function () {
                                window.navigator.clipboard.writeText(data.join('')).then();
                            } }, { children: [(0, jsx_runtime_1.jsx)("svg", __assign({ role: "graphics-symbol", viewBox: "0 0 14 16", className: "icon" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M2.404 15.322h5.701c1.26 0 1.887-.662 1.887-1.927V12.38h1.154c1.254 0 1.91-.662 1.91-1.928V5.555c0-.774-.158-1.266-.626-1.74L9.512.837C9.066.387 8.545.21 7.865.21H5.463c-1.254 0-1.91.662-1.91 1.928v1.084H2.404c-1.254 0-1.91.668-1.91 1.933v8.239c0 1.265.656 1.927 1.91 1.927zm7.588-6.62c0-.792-.1-1.161-.592-1.665L6.225 3.814c-.452-.462-.844-.58-1.5-.591V2.215c0-.533.28-.832.843-.832h2.38v2.883c0 .726.386 1.113 1.107 1.113h2.83v4.998c0 .539-.276.832-.844.832H9.992V8.701zm-.79-4.29c-.206 0-.288-.088-.288-.287V1.594l2.771 2.818H9.201zM2.503 14.15c-.563 0-.844-.293-.844-.832V5.232c0-.539.281-.837.85-.837h1.91v3.187c0 .85.416 1.26 1.26 1.26h3.14v4.476c0 .54-.28.832-.843.832H2.504zM5.79 7.816c-.24 0-.346-.105-.346-.345V4.547l3.223 3.27H5.791z" }) })), "\uBCF5\uC0AC"] })) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "content" }, { children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(react_highlight_1.default, __assign({ className: block.code.language }, { children: (0, jsx_runtime_1.jsx)(richTexts_1.default, { richTexts: block.code.rich_text }) })) }) }))] }), block.code.caption.length >= 1 && ((0, jsx_runtime_1.jsx)(captionBlock_1.default, { caption: block.code.caption }))] }));
}
exports.default = CodeBlock;
