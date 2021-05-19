"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoute = void 0;
const customer_controller_1 = require("../controllers/customer.controller");
class CustomerRoute {
    static initRoutes(router) {
        router.get('/customer', (req, res, next) => {
            const customer = new customer_controller_1.CustomerController().getCustomers(req, res);
        });
        router.post('/post/customer', (req, res, next) => {
            const customer = new customer_controller_1.CustomerController().postCustomers(req, res);
        });
        router.put('/update/customer', (req, res, next) => {
            const customer = new customer_controller_1.CustomerController().updateCustomers(req, res);
        });
    }
}
exports.CustomerRoute = CustomerRoute;
//# sourceMappingURL=coustomer.routes.js.map