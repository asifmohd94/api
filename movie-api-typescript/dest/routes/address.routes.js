"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressRoutes = void 0;
const address_controller_1 = require("../controllers/address.controller");
class AddressRoutes {
    static initRoutes(router) {
        router.get('/addresss', (req, res, next) => {
            const address = new address_controller_1.AddressController().getAddress(req, res);
        });
        router.post('/post/address', (req, res, next) => {
            console.log(req.body);
            const Address = new address_controller_1.AddressController().postAddress(req, res);
        });
        router.put('/update/address', (req, res, next) => {
            console.log(req.body);
            const Address = new address_controller_1.AddressController().updateAddress(req, res);
        });
    }
}
exports.AddressRoutes = AddressRoutes;
//# sourceMappingURL=address.routes.js.map