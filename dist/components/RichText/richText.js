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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var richTextStyled_1 = require("./richTextStyled");
function RichText(_a) {
    var richText = _a.richText;
    var className = '';
    if (richText.annotations.bold)
        className += ' bold';
    if (richText.annotations.italic)
        className += ' italic';
    if (richText.annotations.underline)
        className += ' underline';
    if (richText.annotations.strikethrough)
        className += ' strikethrough';
    return ((0, jsx_runtime_1.jsx)(richTextStyled_1.Container, __assign({ className: "".concat(className, " ").concat(richText.annotations.color) }, { children: richText.plain_text })));
}
exports.default = RichText;
