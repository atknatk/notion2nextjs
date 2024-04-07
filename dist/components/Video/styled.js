"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
var styled_1 = __importDefault(require("@emotion/styled"));
exports.Container = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & > .external {\n    position: relative;\n    width: 100%;\n    height: 0;\n    padding-top: 56%;\n\n    iframe {\n      position: absolute;\n      top: 0;\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  & > video {\n    width: 100%;\n    height: 100%;\n  }\n"], ["\n  & > .external {\n    position: relative;\n    width: 100%;\n    height: 0;\n    padding-top: 56%;\n\n    iframe {\n      position: absolute;\n      top: 0;\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  & > video {\n    width: 100%;\n    height: 100%;\n  }\n"])));
var templateObject_1;
