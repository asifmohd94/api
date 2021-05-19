import { Request, Response } from "express";
import { InventoryService } from "../services/inventory.service";


export class InventoryController {
    inventoryService: InventoryService;
    constructor() {
        this.inventoryService = new InventoryService();
    }
    public async getInventory(req: Request, res: Response) {
        if (typeof (req.query.id) !== "string") {
            res.status(400).send("Error");
        }
        else {
            let ans = await this.inventoryService.getInventorys({ Inv_id: parseInt(req.query.id) });
            res.send(ans);
        }
    }

    public async postInventory(req: Request, res: Response) {
        try {
            let ans = await this.inventoryService.postInventorys(req.body);
            res.send("Inserted new tables");
        } catch (err) {
            console.log(err);
            res.status(500)
                .send("Error");
        }

    }


    public async updateInventory(req: Request, res: Response) {
        try {
            let ans = await this.inventoryService.updateInventory(req.body);
            res.send(ans);
        } catch (err) {
            console.log(err);
            res.status(404)
                .send("Error");
        }
    }
    public async deleteInventory(req: Request, res: Response) {
        try {
            if (typeof (req.query.inv_id) != "string") {
                res.status(400).send("Error");
            }
            else {
                let ans = this.inventoryService.deleteInventorys({ Inv_id: parseInt(req.query.inv_id) });
                res.send(ans);
            }
        } catch (err) {
            console.log(err);
            res.status(404)
                .send("Not Found");
        }
    }
}