"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var bookmarkBlock_1 = __importDefault(require("../Bookmark/bookmarkBlock"));
var bulletedListItemBlock_1 = __importDefault(require("../BulletedListItem/bulletedListItemBlock"));
var paragraphBlock_1 = __importDefault(require("../Paragraph/paragraphBlock"));
var calloutBlock_1 = __importDefault(require("../Callout/calloutBlock"));
var codeBlock_1 = __importDefault(require("../Code/codeBlock"));
var columnBlock_1 = __importDefault(require("../Column/columnBlock"));
var columnListBlock_1 = __importDefault(require("../ColumnList/columnListBlock"));
var dividerBlock_1 = __importDefault(require("../Divider/dividerBlock"));
var equationBlock_1 = __importDefault(require("../Equation/equationBlock"));
var fileBlock_1 = __importDefault(require("../File/fileBlock"));
var headerBlock_1 = __importDefault(require("../Header/headerBlock"));
var imageBlock_1 = __importDefault(require("../Image/imageBlock"));
var numberedListItemBlock_1 = __importDefault(require("../NumberedListItem/numberedListItemBlock"));
var quoteBlock_1 = __importDefault(require("../Quote/quoteBlock"));
var tableBlock_1 = __importDefault(require("../Table/tableBlock"));
var todoBlock_1 = __importDefault(require("../Todo/todoBlock"));
var toggleBlock_1 = __importDefault(require("../Toggle/toggleBlock"));
var videoBlock_1 = __importDefault(require("../Video/videoBlock"));
var styled_1 = require("./styled");
function NotionBlock(_a) {
    var block = _a.block, numbered = _a.numbered;
    function getBlock() {
        switch (block.type) {
            case 'bookmark': {
                var bookmark = block;
                return (0, jsx_runtime_1.jsx)(bookmarkBlock_1.default, { block: bookmark });
            }
            case 'bulleted_list_item': {
                var bulletedListItem = block;
                return (0, jsx_runtime_1.jsx)(bulletedListItemBlock_1.default, { block: bulletedListItem });
            }
            case 'callout': {
                var callout = block;
                return (0, jsx_runtime_1.jsx)(calloutBlock_1.default, { block: callout });
            }
            case 'code': {
                var code = block;
                return (0, jsx_runtime_1.jsx)(codeBlock_1.default, { block: code });
            }
            case 'column': {
                var column = block;
                return (0, jsx_runtime_1.jsx)(columnBlock_1.default, { block: column });
            }
            case 'column_list': {
                var columnList = block;
                return (0, jsx_runtime_1.jsx)(columnListBlock_1.default, { block: columnList });
            }
            case 'divider': {
                return (0, jsx_runtime_1.jsx)(dividerBlock_1.default, {});
            }
            case 'equation': {
                var equation = block;
                return (0, jsx_runtime_1.jsx)(equationBlock_1.default, { block: equation });
            }
            case 'file': {
                var file = block;
                return (0, jsx_runtime_1.jsx)(fileBlock_1.default, { block: file });
            }
            case 'heading_1': {
                var heading = block;
                return (0, jsx_runtime_1.jsx)(headerBlock_1.default, { block: heading });
            }
            case 'heading_2': {
                var heading = block;
                return (0, jsx_runtime_1.jsx)(headerBlock_1.default, { block: heading });
            }
            case 'heading_3': {
                var heading = block;
                return (0, jsx_runtime_1.jsx)(headerBlock_1.default, { block: heading });
            }
            case 'image': {
                var image = block;
                return (0, jsx_runtime_1.jsx)(imageBlock_1.default, { block: image });
            }
            case 'numbered_list_item': {
                var numberedListItem = block;
                return ((0, jsx_runtime_1.jsx)(numberedListItemBlock_1.default, { block: numberedListItem, number: numbered }));
            }
            case 'quote': {
                var quote = block;
                return (0, jsx_runtime_1.jsx)(quoteBlock_1.default, { block: quote });
            }
            case 'table': {
                var table = block;
                return (0, jsx_runtime_1.jsx)(tableBlock_1.default, { block: table });
            }
            case 'to_do': {
                var toDo = block;
                return (0, jsx_runtime_1.jsx)(todoBlock_1.default, { block: toDo });
            }
            case 'toggle': {
                var toggle = block;
                return (0, jsx_runtime_1.jsx)(toggleBlock_1.default, { block: toggle });
            }
            case 'video': {
                var video = block;
                return (0, jsx_runtime_1.jsx)(videoBlock_1.default, { block: video });
            }
            case 'paragraph': {
                var paragraph = block;
                return (0, jsx_runtime_1.jsx)(paragraphBlock_1.default, { block: paragraph });
            }
            default:
                return (0, jsx_runtime_1.jsx)("div", {});
        }
    }
    return (0, jsx_runtime_1.jsx)(styled_1.Container, { children: getBlock() });
}
exports.default = NotionBlock;
