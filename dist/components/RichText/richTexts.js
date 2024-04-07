"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var richText_1 = __importDefault(require("./richText"));
var richTextsStyled_1 = require("./richTextsStyled");
function RichTexts(_a) {
    var richTexts = _a.richTexts;
    var array = [];
    for (var i = 0; i < richTexts.length; i++) {
        if (!richTexts[i].annotations.code) {
            array.push((0, jsx_runtime_1.jsx)(richText_1.default, { richText: richTexts[i] }, i));
        }
        else {
            var codes = [];
            while (i < richTexts.length && richTexts[i].annotations.code) {
                codes.push((0, jsx_runtime_1.jsx)(richText_1.default, { richText: richTexts[i] }, i));
                i++;
            }
            array.push((0, jsx_runtime_1.jsx)("code", { children: codes }, "c".concat(i)));
        }
    }
    return (0, jsx_runtime_1.jsx)(richTextsStyled_1.Container, { children: array });
}
exports.default = RichTexts;
