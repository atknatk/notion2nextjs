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
var styled_1 = require("./styled");
function VideoBlock(_a) {
    var block = _a.block;
    return ((0, jsx_runtime_1.jsx)(styled_1.Container, { children: block.video.type === 'external' ? ((0, jsx_runtime_1.jsx)("div", __assign({ className: "external" }, { children: (0, jsx_runtime_1.jsx)("iframe", { src: block.video.external.url.replace('watch?v=', 'embed/'), title: "YouTube video player", allowFullScreen: true }) }))) : ((0, jsx_runtime_1.jsx)("video", { src: block.video.file.url, controls: true })) }));
}
exports.default = VideoBlock;
