"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("./middlewares");
const app = express_1.default();
middlewares_1.Middlewares.init(app);
app.use(express_1.default.json());
app.listen(3000, () => {
    console.log("Server is up and running on port 4000");
});
//# sourceMappingURL=index.js.map