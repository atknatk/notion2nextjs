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
var better_react_mathjax_1 = require("better-react-mathjax");
var styled_1 = require("./styled");
function EquationBlock(_a) {
    var block = _a.block;
    var config = {
        tex2jax: { displayMath: [['$$', '$$']] },
    };
    return ((0, jsx_runtime_1.jsx)(styled_1.Container, { children: (0, jsx_runtime_1.jsx)(better_react_mathjax_1.MathJaxContext, __assign({ config: config, version: 2 }, { children: (0, jsx_runtime_1.jsx)(better_react_mathjax_1.MathJax, __assign({ inline: true }, { children: "$$".concat(block.equation.expression, "$$") })) })) }));
}
exports.default = EquationBlock;
