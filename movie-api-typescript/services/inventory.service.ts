import { IInventorySearchFilter } from "../models/api.interface/inventory.interface";
import { IInventory } from "../models/inventory.models";
import {pool} from "../config/pool"


export class InventoryService {
    constructor(){
        
    }
    public async getInventorys(filter?:IInventorySearchFilter): Promise<any> {
        let query = "SELECT * from inventory WHERE inventory_id = $1";
        let values = [filter?.Inv_id];
        let result = await pool.query(query,values);
        return result.rows;
    }

    public async postInventorys(body: any[]) {
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

        let result = await pool.query(query, values);

    }

    public async updateInventory(body: any[]) {
        let query = "UPDATE public.inventory SET film_id = $1 WHERE inventory_id = $2 ";
        let values = [];
        values.push(body[0].film_id);
        values.push(body[0].inventory_id);
        let result = await pool.query(query, values);
        return result.rows;
    }

    public async deleteInventorys(filter?: IInventorySearchFilter) {
        let query = "DELETE FROM public.inventory WHERE inventory_id = $1";
        let values = [filter?.Inv_id];
        let result = await pool.query(query, values);
        return result;
    }

}