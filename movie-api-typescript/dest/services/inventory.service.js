"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryService = void 0;
const pool_1 = require("../config/pool");
class InventoryService {
    constructor() {
    }
    async getInventorys(filter) {
        let query = "SELECT * from inventory WHERE inventory_id = $1";
        let values = [filter?.Inv_id];
        let result = await pool_1.pool.query(query, values);
        return result.rows;
    }
    async postInventorys(body) {
        let query = "INSERT INTO public.inventory(inventory_id,film_id,store_id,last_update) VALUES ";
        let values = [];
        let ans = "";
        let x = 1;
        for (let i = 0; i < body.length; i++) {
            ans += "(";
            for (let j = 0; j < 4; j++) {
                ans += "$" + x + ",";
                x++;
            }
            ans = ans.substring(0, ans.length - 1);
            ans += "),";
            query += ans;
            values.push(body[i].Inventory_id);
            values.push(body[i].first_name);
            values.push(body[i].last_name);
            values.push(body[i].last_update);
            ans = "";
        }
        query = query.substring(0, query.length - 1);
        let result = await pool_1.pool.query(query, values);
    }
    async updateInventory(body) {
        let query = "UPDATE public.inventory SET film_id = $1 WHERE inventory_id = $2 ";
        let values = [];
        values.push(body[0].film_id);
        values.push(body[0].inventory_id);
        let result = await pool_1.pool.query(query, values);
        return result.rows;
    }
    async deleteInventorys(filter) {
        let query = "DELETE FROM public.inventory WHERE inventory_id = $1";
        let values = [filter?.Inv_id];
        let result = await pool_1.pool.query(query, values);
        return result;
    }
}
exports.InventoryService = InventoryService;
//# sourceMappingURL=inventory.service.js.map