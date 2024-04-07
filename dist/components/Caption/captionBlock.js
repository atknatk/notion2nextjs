"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var richTexts_1 = __importDefault(require("../RichText/richTexts"));
var styled_1 = require("./styled");
function CaptionBlock(_a) {
    var caption = _a.caption;
    return ((0, jsx_runtime_1.jsx)(styled_1.Container, { children: (0, jsx_runtime_1.jsx)(richTexts_1.default, { richTexts: caption }) }));
}
exports.default = CaptionBlock;
