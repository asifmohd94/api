"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const pool_1 = require("../config/pool");
class CustomerService {
    constructor() {
        // pool
        /**
         *
         */
        this.query = "SELECT * FROM customer";
    }
    async getCustomers(filter) {
        throw new Error("Not Implemented Error");
    }
    async postCustomers(body) {
        let query = "INSERT INTO public.customer(customer_id,store_id,first_name,last_name,email,address_id,activebool,create_date,last_upadte,active) VALUES ";
        let values = [];
        let ans = "";
        let x = 1;
        for (let i = 0; i < body.length; i++) {
            ans += "(";
            for (let j = 0; j < 10; j++) {
                ans += "$" + x + ",";
                x++;
            }
            ans = ans.substring(0, ans.length - 1);
            ans += "),";
            query += ans;
            values.push(body[i].customer_id);
            values.push(body[i].store_id);
            values.push(body[i].first_name);
            values.push(body[i].last_name);
            values.push(body[i].email);
            values.push(body[i].address_id);
            values.push(body[i].activebool);
            values.push(body[i].create_date);
            values.push(body[i].last_upadte);
            values.push(body[i].active);
            ans = "";
        }
        query = query.substring(0, query.length - 1);
        let result = await pool_1.pool.query(query, values);
    }
    async updateCustomers(body) {
        let query = "UPDATE public.customer SET email = $1, active = $2 WHERE customer_id = $2";
        let values = [];
        values.push(body[0].email);
        values.push(body[0].active);
        values.push(body[0].customer_id);
        let result = await pool_1.pool.query(query, values);
        return result;
    }
}
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map