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
var notionBlock_1 = __importDefault(require("../Block/notionBlock"));
var iconBlock_1 = __importDefault(require("../Icon/iconBlock"));
var richTexts_1 = __importDefault(require("../RichText/richTexts"));
var styled_1 = require("./styled");
function CalloutBlock(_a) {
    var block = _a.block;
    return ((0, jsx_runtime_1.jsxs)(styled_1.Container, __assign({ className: block.callout.color }, { children: [(0, jsx_runtime_1.jsx)(iconBlock_1.default, { icon: block.callout.icon }), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "content" }, { children: [(0, jsx_runtime_1.jsx)(richTexts_1.default, { richTexts: block.callout.rich_text }), block.children && ((0, jsx_runtime_1.jsx)("div", __assign({ className: "children" }, { children: block.children.map(function (child, idx) { return ((0, jsx_runtime_1.jsx)(notionBlock_1.default, { block: child }, idx)); }) })))] }))] })));
}
exports.default = CalloutBlock;
