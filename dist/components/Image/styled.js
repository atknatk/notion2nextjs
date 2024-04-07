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
exports.Container = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n\n  & > img {\n    width: 100%;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n\n  & > img {\n    width: 100%;\n  }\n"])));
var templateObject_1;
