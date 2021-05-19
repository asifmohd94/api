"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressController = void 0;
const address_service_1 = require("../services/address.service");
class AddressController {
    constructor() {
        this.addressService = new address_service_1.AddressService();
    }
    async getAddress(req, res) {
        try {
            if (typeof (req.query.id) !== "string") {
                res.status(400).send("Error");
            }
            else {
                let ans = await this.addressService.getAddress({ Id: parseInt(req.query.id) });
                res.send(ans);
            }
        }
        catch (err) {
            console.log(err);
            res.send("Error");
        }
    }
    async postAddress(req, res) {
        let ans = await this.addressService.postAddress(req.body);
        res.send("Created");
    }
    async updateAddress(req, res) {
        let ans = await this.addressService.updateAddress(req.body);
    }
}
exports.AddressController = AddressController;
//# sourceMappingURL=address.controller.js.map