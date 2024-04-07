"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var emotionStyled_1 = require("./emotionStyled");
function EmojiBlock(_a) {
    var emoji = _a.emoji;
    return ((0, jsx_runtime_1.jsx)(emotionStyled_1.Container, { children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("span", { children: emoji.emoji }) }) }) }));
}
exports.default = EmojiBlock;
