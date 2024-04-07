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
var notionColor_1 = require("../notionColor");
exports.Container = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-left: 14px;\n  padding-right: 14px;\n\n  border-left: 3px solid currentcolor;\n  box-sizing: border-box;\n  ", "\n"], ["\n  padding-left: 14px;\n  padding-right: 14px;\n\n  border-left: 3px solid currentcolor;\n  box-sizing: border-box;\n  ", "\n"])), notionColor_1.NotionColor);
var templateObject_1;
