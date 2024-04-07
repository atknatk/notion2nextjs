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
exports.Container = styled_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  line-height: 1.5;\n  white-space: pre;\n\n  &.bold {\n    font-weight: 700;\n  }\n\n  &.italic {\n    font-style: italic;\n  }\n\n  &.underline {\n    border-bottom: 1px solid;\n  }\n\n  &.strikethrough {\n    text-decoration: line-through;\n  }\n\n  ", "\n"], ["\n  line-height: 1.5;\n  white-space: pre;\n\n  &.bold {\n    font-weight: 700;\n  }\n\n  &.italic {\n    font-style: italic;\n  }\n\n  &.underline {\n    border-bottom: 1px solid;\n  }\n\n  &.strikethrough {\n    text-decoration: line-through;\n  }\n\n  ", "\n"])), notionColor_1.NotionColor);
var templateObject_1;
