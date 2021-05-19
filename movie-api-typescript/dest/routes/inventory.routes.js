"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryRoutes = void 0;
const inventory_controller_1 = require("../controllers/inventory.controller");
class InventoryRoutes {
    static initRoutes(router) {
        console.log("Film Routes");
        router.get('/inventory', (req, res, next) => {
            const film = new inventory_controller_1.InventoryController().getInventory(req, res);
        });
        router.post('/post/inventory', (req, res, next) => {
            const post = new inventory_controller_1.InventoryController().postInventory(req, res);
            next();
        });
        router.delete('/delete/inventory', (req, res, next) => {
            const del = new inventory_controller_1.InventoryController().deleteInventory(req, res);
        });
    }
}
exports.InventoryRoutes = InventoryRoutes;
//# sourceMappingURL=inventory.routes.js.map