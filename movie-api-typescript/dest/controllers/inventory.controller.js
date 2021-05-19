"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryController = void 0;
const inventory_service_1 = require("../services/inventory.service");
class InventoryController {
    constructor() {
        this.inventoryService = new inventory_service_1.InventoryService();
    }
    async getInventory(req, res) {
        if (typeof (req.query.id) !== "string") {
            res.status(400).send("Error");
        }
        else {
            let ans = await this.inventoryService.getInventorys({ Inv_id: parseInt(req.query.id) });
            res.send(ans);
        }
    }
    async postInventory(req, res) {
        try {
            let ans = await this.inventoryService.postInventorys(req.body);
            res.send("Inserted new tables");
        }
        catch (err) {
            console.log(err);
            res.status(500)
                .send("Error");
        }
    }
    async updateInventory(req, res) {
        try {
            let ans = await this.inventoryService.updateInventory(req.body);
            res.send(ans);
        }
        catch (err) {
            console.log(err);
            res.status(404)
                .send("Error");
        }
    }
    async deleteInventory(req, res) {
        try {
            if (typeof (req.query.inv_id) != "string") {
                res.status(400).send("Error");
            }
            else {
                let ans = this.inventoryService.deleteInventorys({ Inv_id: parseInt(req.query.inv_id) });
                res.send(ans);
            }
        }
        catch (err) {
            console.log(err);
            res.status(404)
                .send("Not Found");
        }
    }
}
exports.InventoryController = InventoryController;
//# sourceMappingURL=inventory.controller.js.map