import { Router } from "express";
import { CustomerController } from "../controllers/customer.controller"

export class CustomerRoute {
    public static initRoutes(router: Router) {
        router.get('/customer', (req, res, next) => {
            const customer = new CustomerController().getCustomers(req, res);

        })

        router.post('/post/customer', (req, res, next) => {
            const customer = new CustomerController().postCustomers(req, res);
        })

        router.put('/update/customer', (req, res, next) => {
            const customer = new CustomerController().updateCustomers(req, res);
        })

    }
}