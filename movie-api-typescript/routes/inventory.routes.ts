import { Router } from "express";
import { InventoryController } from "../controllers/inventory.controller";

export class InventoryRoutes {
    public static initRoutes(router: Router) {
        console.log("Film Routes");
        router.get('/inventory', (req, res, next) => {
            const film = new InventoryController().getInventory(req, res);
            
        });
        router.post('/post/inventory', (req, res, next) => {
            const post = new InventoryController().postInventory(req, res);
            next();
        })
        router.delete('/delete/inventory', (req, res, next) => { 
            const del = new InventoryController().deleteInventory(req,res);
        })

    }
}