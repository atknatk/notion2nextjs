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
exports.Container = styled_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n\n  width: 100%;\n  text-decoration: none;\n  color: inherit;\n\n  padding-top: 3px;\n  padding-bottom: 3px;\n  padding-left: 2px;\n\n  & > div {\n    width: 21.6px;\n    height: 30px;\n    svg {\n      width: 100%;\n      height: 100%;\n      display: block;\n      flex-shrink: 0;\n    }\n  }\n  span {\n    font-size: 16px;\n    line-height: 20px;\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    &:hover {\n      background-color: rgba(55, 53, 47, 0.08);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n\n  width: 100%;\n  text-decoration: none;\n  color: inherit;\n\n  padding-top: 3px;\n  padding-bottom: 3px;\n  padding-left: 2px;\n\n  & > div {\n    width: 21.6px;\n    height: 30px;\n    svg {\n      width: 100%;\n      height: 100%;\n      display: block;\n      flex-shrink: 0;\n    }\n  }\n  span {\n    font-size: 16px;\n    line-height: 20px;\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    &:hover {\n      background-color: rgba(55, 53, 47, 0.08);\n    }\n  }\n"])));
var templateObject_1;
