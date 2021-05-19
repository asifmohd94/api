"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const customer_service_1 = require("../services/customer.service");
class CustomerController {
    constructor() {
        this.customerService = new customer_service_1.CustomerService();
    }
    async getCustomers(req, res) {
    }
    async postCustomers(req, res) {
        try {
            let ans = new customer_service_1.CustomerService().postCustomers(req.body);
            res.send(ans);
        }
        catch (err) {
            console.log(err);
            res.status(500).send({ message: "Error occured" });
        }
    }
    async updateCustomers(req, res) {
        try {
            let ans = new customer_service_1.CustomerService().updateCustomers(req.body);
            res.send(ans);
        }
        catch (err) {
            console.log(err);
            res.status(404)
                .send({ message: "Error Occured" });
        }
    }
}
exports.CustomerController = CustomerController;
//# sourceMappingURL=customer.controller.js.map