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
var styled_1 = require("./styled");
var captionBlock_1 = __importDefault(require("../Caption/captionBlock"));
function FileBlock(_a) {
    var block = _a.block;
    var url;
    if (block.file.type === 'external') {
        url = block.file.external.url;
    }
    else {
        url = block.file.file.url;
    }
    var array = url.split('?')[0].split('/');
    var name = array[array.length - 1];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(styled_1.Container, __assign({ href: url, target: "_blank" }, { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("svg", __assign({ role: "graphics-symbol", viewBox: "0 0 16 16", className: "file" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M4.35645 15.4678H11.6367C13.0996 15.4678 13.8584 14.6953 13.8584 13.2256V7.02539C13.8584 6.0752 13.7354 5.6377 13.1406 5.03613L9.55176 1.38574C8.97754 0.804688 8.50586 0.667969 7.65137 0.667969H4.35645C2.89355 0.667969 2.13477 1.44043 2.13477 2.91016V13.2256C2.13477 14.7021 2.89355 15.4678 4.35645 15.4678ZM4.46582 14.1279C3.80273 14.1279 3.47461 13.7793 3.47461 13.1436V2.99219C3.47461 2.36328 3.80273 2.00781 4.46582 2.00781H7.37793V5.75391C7.37793 6.73145 7.86328 7.20312 8.83398 7.20312H12.5186V13.1436C12.5186 13.7793 12.1836 14.1279 11.5205 14.1279H4.46582ZM8.95703 6.02734C8.67676 6.02734 8.56055 5.9043 8.56055 5.62402V2.19238L12.334 6.02734H8.95703ZM8.59473 12.7266V10.6279L8.54004 9.56152L9.06641 10.1152L9.59277 10.6484C9.68848 10.7646 9.8457 10.833 9.98926 10.833C10.2969 10.833 10.5293 10.6143 10.5293 10.3066C10.5293 10.1357 10.4678 10.0127 10.3379 9.90332L8.45117 8.16699C8.29395 8.02344 8.16406 7.96191 7.99316 7.96191C7.8291 7.96191 7.69922 8.02344 7.54199 8.16699L5.65527 9.90332C5.52539 10.0127 5.46387 10.1357 5.46387 10.3066C5.46387 10.6143 5.68945 10.833 6.00391 10.833C6.14746 10.833 6.29785 10.7646 6.40039 10.6484L6.92676 10.1152L7.45312 9.56152L7.39844 10.6279V12.7266C7.39844 13.0547 7.67188 13.3008 7.99316 13.3008C8.32129 13.3008 8.59473 13.0547 8.59473 12.7266Z" }) })) }), (0, jsx_runtime_1.jsx)("span", { children: name })] })), block.file.caption.length >= 1 && ((0, jsx_runtime_1.jsx)(captionBlock_1.default, { caption: block.file.caption }))] }));
}
exports.default = FileBlock;
