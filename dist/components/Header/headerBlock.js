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
var react_1 = require("react");
var richTexts_1 = __importDefault(require("../RichText/richTexts"));
var notionBlock_1 = __importDefault(require("../Block/notionBlock"));
var styled_1 = require("./styled");
function HeaderBlock(_a) {
    var block = _a.block;
    var _b = (0, react_1.useState)(true), isOpen = _b[0], setOpen = _b[1];
    var header = block.type === 'heading_1'
        ? block.heading_1
        : block.type === 'heading_2'
            ? block.heading_2
            : block.heading_3;
    function content() {
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [header.is_toggleable && ((0, jsx_runtime_1.jsx)("button", __assign({ className: "button", onClick: function () { return setOpen(function (state) { return !state; }); } }, { children: (0, jsx_runtime_1.jsx)("svg", __assign({ role: "graphics-symbol", viewBox: "0 0 100 100" }, { children: (0, jsx_runtime_1.jsx)("polygon", { points: "5.9,88.2 50,11.8 94.1,88.2 " }) })) }))), (0, jsx_runtime_1.jsx)("div", __assign({ className: "content" }, { children: (0, jsx_runtime_1.jsx)(richTexts_1.default, { richTexts: header.rich_text }) }))] }));
    }
    return ((0, jsx_runtime_1.jsxs)(styled_1.Container, __assign({ className: "".concat(block.type, " ").concat(isOpen ? 'open' : '') }, { children: [block.type === 'heading_1' ? ((0, jsx_runtime_1.jsx)("h2", __assign({ className: header.color }, { children: content() }))) : block.type === 'heading_2' ? ((0, jsx_runtime_1.jsx)("h3", __assign({ className: header.color }, { children: content() }))) : ((0, jsx_runtime_1.jsx)("h4", __assign({ className: header.color }, { children: content() }))), block.children && ((0, jsx_runtime_1.jsx)("div", __assign({ className: "children" }, { children: block.children &&
                    block.children.map(function (child, idx) { return ((0, jsx_runtime_1.jsx)(notionBlock_1.default, { block: child }, idx)); }) })))] })));
}
exports.default = HeaderBlock;
