import { Request, Response } from "express";
import { AddressService } from "../services/address.service";

export class AddressController {
    addressService: AddressService;
    constructor() {
        this.addressService = new AddressService();
    }
    public async getAddress(req: Request, res: Response) {
        try {
            if (typeof (req.query.id) !== "string") {
                res.status(400).send("Error");
            }
            else {
                let ans = await this.addressService.getAddress({ Id: parseInt(req.query.id) });
                res.send(ans);
            }
        } catch (err) {
            console.log(err);
            res.send("Error");
        }

    }

    public async postAddress(req: Request, res: Response) {
        let ans = await this.addressService.postAddress(req.body);
        res.send("Created");
    }


    public async updateAddress(req: Request, res: Response) {
    let ans = await this.addressService.updateAddress(req.body);
    }

}