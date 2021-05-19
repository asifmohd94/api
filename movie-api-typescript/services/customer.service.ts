import { ICustomerSearchFilter } from "../models/api.interface/customer.interface";
import { ICustomer } from "../models/customer.model";
import { pool } from "../config/pool"

export class CustomerService {

    /**
     *
     */
    query = "SELECT * FROM customer";

    constructor() {
        // pool

    }

    public async getCustomers(filter?: ICustomerSearchFilter): Promise<ICustomer> {

        throw new Error("Not Implemented Error");
    }

    public async postCustomers(body: any[]) {

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

        let result = await pool.query(query, values);


    }

    public async updateCustomers(body:any[]) {
     let query = "UPDATE public.customer SET email = $1, active = $2 WHERE customer_id = $2";
     let values = [];
     values.push(body[0].email);
     values.push(body[0].active);
     values.push(body[0].customer_id);
     let result = await pool.query(query,values);
     return result;
    }

}