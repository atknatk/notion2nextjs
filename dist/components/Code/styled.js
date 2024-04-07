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
exports.Container = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n\n  width: 100%;\n  background: rgb(247, 246, 243);\n  border-radius: 3px;\n  box-sizing: border-box;\n\n  & > .content {\n    overflow-x: auto;\n\n    & > div {\n      display: inline-block;\n      padding: 34px 16px 32px 32px;\n    }\n\n    pre {\n      display: inline;\n      margin: 0;\n    }\n\n    code {\n      display: inline;\n      padding: 0;\n      font-family: SFMono-Regular, Menlo, Consolas, 'PT Mono', 'Liberation Mono',\n        Courier, monospace;\n      font-size: 85%;\n      background: rgba(0, 0, 0, 0);\n    }\n\n    &::-webkit-scrollbar {\n      height: 10px;\n      background: #edece9;\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background: #d3d1cb;\n    }\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    &:hover > .copyButton {\n      opacity: 100%;\n    }\n  }\n\n  & > .copyButton {\n    position: absolute;\n    top: 6px;\n    right: 6px;\n    transition: opacity 250ms linear;\n    opacity: 0;\n\n    button {\n      user-select: none;\n      transition: background 20ms ease-in 0s;\n      cursor: pointer;\n      display: inline-flex;\n      align-items: center;\n      white-space: nowrap;\n      height: 25px;\n      border-radius: 3px 0px 0px 3px;\n      font-size: 11.5px;\n      line-height: 1.2;\n      padding: 4px 6px;\n      color: rgb(55, 53, 47);\n      background: rgb(55, 53, 47, 0.08);\n      border: none;\n      font-weight: 400;\n\n      .icon {\n        width: 16px;\n        height: 16px;\n        display: block;\n        flex-shrink: 0;\n        padding-right: 4px;\n      }\n    }\n    button:active {\n      background: rgb(55, 53, 47, 0.16);\n    }\n  }\n"], ["\n  position: relative;\n\n  width: 100%;\n  background: rgb(247, 246, 243);\n  border-radius: 3px;\n  box-sizing: border-box;\n\n  & > .content {\n    overflow-x: auto;\n\n    & > div {\n      display: inline-block;\n      padding: 34px 16px 32px 32px;\n    }\n\n    pre {\n      display: inline;\n      margin: 0;\n    }\n\n    code {\n      display: inline;\n      padding: 0;\n      font-family: SFMono-Regular, Menlo, Consolas, 'PT Mono', 'Liberation Mono',\n        Courier, monospace;\n      font-size: 85%;\n      background: rgba(0, 0, 0, 0);\n    }\n\n    &::-webkit-scrollbar {\n      height: 10px;\n      background: #edece9;\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background: #d3d1cb;\n    }\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    &:hover > .copyButton {\n      opacity: 100%;\n    }\n  }\n\n  & > .copyButton {\n    position: absolute;\n    top: 6px;\n    right: 6px;\n    transition: opacity 250ms linear;\n    opacity: 0;\n\n    button {\n      user-select: none;\n      transition: background 20ms ease-in 0s;\n      cursor: pointer;\n      display: inline-flex;\n      align-items: center;\n      white-space: nowrap;\n      height: 25px;\n      border-radius: 3px 0px 0px 3px;\n      font-size: 11.5px;\n      line-height: 1.2;\n      padding: 4px 6px;\n      color: rgb(55, 53, 47);\n      background: rgb(55, 53, 47, 0.08);\n      border: none;\n      font-weight: 400;\n\n      .icon {\n        width: 16px;\n        height: 16px;\n        display: block;\n        flex-shrink: 0;\n        padding-right: 4px;\n      }\n    }\n    button:active {\n      background: rgb(55, 53, 47, 0.16);\n    }\n  }\n"])));
var templateObject_1;
