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
exports.Container = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 24px;\n  overflow: hidden;\n\n  & > div {\n    display: flex;\n    gap: 4px;\n  }\n\n  & > .content > .button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    width: 24px;\n    height: 24px;\n\n    padding: 0;\n    margin: 0;\n\n    border: none;\n    border-radius: 3px;\n    background: none;\n\n    svg {\n      width: 11px;\n      height: 11px;\n      display: block;\n      flex-shrink: 0;\n      transition: transform 200ms ease-out 0s;\n      transform: rotateZ(90deg);\n      opacity: 1;\n    }\n  }\n\n  &.open {\n    height: auto;\n\n    & > .content > .button > svg {\n      transform: rotate(180deg);\n    }\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    & > .content > .button:hover {\n      background-color: rgba(55, 53, 47, 0.08);\n    }\n  }\n\n  & > .children {\n    padding-left: 24px;\n  }\n"], ["\n  height: 24px;\n  overflow: hidden;\n\n  & > div {\n    display: flex;\n    gap: 4px;\n  }\n\n  & > .content > .button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    width: 24px;\n    height: 24px;\n\n    padding: 0;\n    margin: 0;\n\n    border: none;\n    border-radius: 3px;\n    background: none;\n\n    svg {\n      width: 11px;\n      height: 11px;\n      display: block;\n      flex-shrink: 0;\n      transition: transform 200ms ease-out 0s;\n      transform: rotateZ(90deg);\n      opacity: 1;\n    }\n  }\n\n  &.open {\n    height: auto;\n\n    & > .content > .button > svg {\n      transform: rotate(180deg);\n    }\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    & > .content > .button:hover {\n      background-color: rgba(55, 53, 47, 0.08);\n    }\n  }\n\n  & > .children {\n    padding-left: 24px;\n  }\n"])));
var templateObject_1;
