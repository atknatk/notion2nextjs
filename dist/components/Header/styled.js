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
exports.Container = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow: hidden;\n  margin-bottom: 4px;\n\n  &.heading_1 {\n    height: 45px;\n    margin-top: 32px;\n  }\n  &.heading_2 {\n    height: 36px;\n    margin-top: 22.5px;\n  }\n  &.heading_3 {\n    height: 30px;\n    margin-top: 16px;\n  }\n\n  & > h2,\n  h3,\n  h4 {\n    display: flex;\n    align-items: center;\n    margin: 0;\n    font-weight: 600;\n    line-height: 1.3;\n    ", ";\n\n    & > .content {\n      padding: 0 2px;\n    }\n\n    & > .button {\n      display: flex;\n      position: relative;\n      user-select: none;\n\n      align-items: center;\n      justify-content: center;\n\n      margin-right: 2px;\n\n      width: 22px;\n      height: 24px;\n      border-radius: 3px;\n      transition: background 20ms ease-in 0s;\n      cursor: pointer;\n      background: none;\n      border: none;\n\n      svg {\n        width: 11px;\n        height: 11px;\n        display: block;\n        flex-shrink: 0;\n        transition: transform 200ms ease-out 0s;\n        transform: rotateZ(90deg);\n        opacity: 1;\n      }\n    }\n  }\n\n  & > h2 {\n    font-size: 30px;\n  }\n  & > h3 {\n    font-size: 24px;\n  }\n  & > h4 {\n    font-size: 20px;\n  }\n\n  &.open {\n    height: auto;\n\n    & .button > svg {\n      transform: rotate(180deg);\n    }\n  }\n\n  & > .children {\n    padding-left: 24px;\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    .button:hover {\n      background-color: rgba(55, 53, 47, 0.08);\n    }\n  }\n"], ["\n  overflow: hidden;\n  margin-bottom: 4px;\n\n  &.heading_1 {\n    height: 45px;\n    margin-top: 32px;\n  }\n  &.heading_2 {\n    height: 36px;\n    margin-top: 22.5px;\n  }\n  &.heading_3 {\n    height: 30px;\n    margin-top: 16px;\n  }\n\n  & > h2,\n  h3,\n  h4 {\n    display: flex;\n    align-items: center;\n    margin: 0;\n    font-weight: 600;\n    line-height: 1.3;\n    ", ";\n\n    & > .content {\n      padding: 0 2px;\n    }\n\n    & > .button {\n      display: flex;\n      position: relative;\n      user-select: none;\n\n      align-items: center;\n      justify-content: center;\n\n      margin-right: 2px;\n\n      width: 22px;\n      height: 24px;\n      border-radius: 3px;\n      transition: background 20ms ease-in 0s;\n      cursor: pointer;\n      background: none;\n      border: none;\n\n      svg {\n        width: 11px;\n        height: 11px;\n        display: block;\n        flex-shrink: 0;\n        transition: transform 200ms ease-out 0s;\n        transform: rotateZ(90deg);\n        opacity: 1;\n      }\n    }\n  }\n\n  & > h2 {\n    font-size: 30px;\n  }\n  & > h3 {\n    font-size: 24px;\n  }\n  & > h4 {\n    font-size: 20px;\n  }\n\n  &.open {\n    height: auto;\n\n    & .button > svg {\n      transform: rotate(180deg);\n    }\n  }\n\n  & > .children {\n    padding-left: 24px;\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    .button:hover {\n      background-color: rgba(55, 53, 47, 0.08);\n    }\n  }\n"])), notionColor_1.NotionColor);
var templateObject_1;