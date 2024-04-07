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
exports.Container = styled_1.default.table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  border-collapse: collapse;\n\n  td {\n    padding: 7px 9px;\n    border: 1px solid rgb(233, 233, 231);\n  }\n"], ["\n  width: 100%;\n  border-collapse: collapse;\n\n  td {\n    padding: 7px 9px;\n    border: 1px solid rgb(233, 233, 231);\n  }\n"])));
var templateObject_1;