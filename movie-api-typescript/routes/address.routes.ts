import { Router } from "express";
import { AddressController } from "../controllers/address.controller";

export class AddressRoutes {
    public static initRoutes(router: Router) {

        router.get('/addresss', (req, res, next) => {
            const address = new AddressController().getAddress(req, res);
        });
        router.post('/post/address', (req, res, next) => {
            console.log(req.body);
            const Address = new AddressController().postAddress(req, res);
        })

        router.put('/update/address', (req, res, next) => {
            console.log(req.body);
            const Address = new AddressController().updateAddress(req, res);

        })

      

    }
}