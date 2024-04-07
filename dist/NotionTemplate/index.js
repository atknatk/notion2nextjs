"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var notionBlock_1 = __importDefault(require("../components/Block/notionBlock"));
var styled_1 = require("./styled");
function Index(_a) {
    var blocks = _a.blocks;
    return ((0, jsx_runtime_1.jsx)(styled_1.Container, { children: blocks.map(function (block, idx) {
            var number = 1;
            if (idx !== 0) {
                while (blocks[idx - number].type === 'numbered_list_item') {
                    number++;
                }
            }
            return (0, jsx_runtime_1.jsx)(notionBlock_1.default, { block: block, numbered: number }, idx);
        }) }));
}
exports.default = Index;
