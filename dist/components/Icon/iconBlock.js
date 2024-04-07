"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var emojiBlock_1 = __importDefault(require("./emojiBlock"));
var externalBlock_1 = __importDefault(require("./externalBlock"));
var fileBlock_1 = __importDefault(require("./fileBlock"));
function IconBlock(_a) {
    var icon = _a.icon;
    if (icon.type === 'emoji')
        return (0, jsx_runtime_1.jsx)(emojiBlock_1.default, { emoji: icon });
    if (icon.type === 'external')
        return (0, jsx_runtime_1.jsx)(externalBlock_1.default, { external: icon });
    if (icon.type === 'file')
        return (0, jsx_runtime_1.jsx)(fileBlock_1.default, { file: icon });
    return (0, jsx_runtime_1.jsx)("div", {});
}
exports.default = IconBlock;
