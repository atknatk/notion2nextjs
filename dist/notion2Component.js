"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notion2Component = void 0;
var node_html_parser_1 = __importDefault(require("node-html-parser"));
var Notion2Component = /** @class */ (function () {
    function Notion2Component(_a) {
        var client = _a.client;
        this.client = client;
    }
    Notion2Component.prototype.getPage = function (pageId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getAll(pageId)];
            });
        });
    };
    Notion2Component.prototype.getAll = function (block) {
        return __awaiter(this, void 0, void 0, function () {
            var children;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getChildren(block)];
                    case 1:
                        children = _a.sent();
                        return [2 /*return*/, Promise.all(children.map(function (child) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, title, description, image, icon, _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            if (!(child.type === 'bookmark')) return [3 /*break*/, 2];
                                            return [4 /*yield*/, this.getBookmarkInfo(child.bookmark.url)];
                                        case 1:
                                            _a = _c.sent(), title = _a.title, description = _a.description, image = _a.image, icon = _a.icon;
                                            child.bookmark.title = title;
                                            child.bookmark.description = description;
                                            child.bookmark.image = image;
                                            child.bookmark.icon = icon;
                                            _c.label = 2;
                                        case 2:
                                            if (!child.has_children) return [3 /*break*/, 4];
                                            _b = child;
                                            return [4 /*yield*/, this.getAll(child.id)];
                                        case 3:
                                            _b.children = _c.sent();
                                            return [2 /*return*/, child];
                                        case 4: return [2 /*return*/, child];
                                    }
                                });
                            }); }))];
                }
            });
        });
    };
    Notion2Component.prototype.getChildren = function (block) {
        return __awaiter(this, void 0, void 0, function () {
            var more, cursor, results, children;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        more = true;
                        cursor = block;
                        results = [];
                        _a.label = 1;
                    case 1:
                        if (!more) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.client.blocks.children.list({
                                block_id: cursor,
                                page_size: 100,
                            })];
                    case 2:
                        children = _a.sent();
                        cursor = children.next_cursor || '';
                        more = children.has_more;
                        results = results.concat(children.results);
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, results.map(function (value) { return value; })];
                }
            });
        });
    };
    Notion2Component.prototype.getBookmarkInfo = function (url) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return __awaiter(this, void 0, void 0, function () {
            var html, elements, title, description, image, iconUrl, icon;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0: return [4 /*yield*/, fetch(url).then(function (res) { return res.text(); })];
                    case 1:
                        html = _l.sent();
                        elements = (0, node_html_parser_1.default)(html);
                        title = ((_a = elements.querySelector('meta[name="title"]')) === null || _a === void 0 ? void 0 : _a.getAttribute('content')) ||
                            ((_b = elements
                                .querySelector('meta[property="og:title"]')) === null || _b === void 0 ? void 0 : _b.getAttribute('content')) ||
                            ((_c = elements
                                .querySelector('meta[name="twitter:title"]')) === null || _c === void 0 ? void 0 : _c.getAttribute('content')) ||
                            ((_d = elements.querySelector('title')) === null || _d === void 0 ? void 0 : _d.text);
                        description = ((_e = elements
                            .querySelector('meta[name="description"]')) === null || _e === void 0 ? void 0 : _e.getAttribute('content')) ||
                            ((_f = elements
                                .querySelector('meta[property="og:description"]')) === null || _f === void 0 ? void 0 : _f.getAttribute('content')) ||
                            ((_g = elements
                                .querySelector('meta[name="twitter:description"]')) === null || _g === void 0 ? void 0 : _g.getAttribute('content'));
                        image = ((_h = elements
                            .querySelector('meta[property="og:image"]')) === null || _h === void 0 ? void 0 : _h.getAttribute('content')) ||
                            ((_j = elements
                                .querySelector('meta[name="twitter:url"]')) === null || _j === void 0 ? void 0 : _j.getAttribute('content'));
                        iconUrl = (_k = elements
                            .querySelector('link[type="image/x-icon"]')) === null || _k === void 0 ? void 0 : _k.getAttribute('href');
                        icon = iconUrl !== undefined && iconUrl.startsWith('/') ? url + iconUrl : iconUrl;
                        return [2 /*return*/, {
                                title: title,
                                description: description,
                                image: image,
                                icon: icon,
                            }];
                }
            });
        });
    };
    return Notion2Component;
}());
exports.Notion2Component = Notion2Component;
