import { IAddressSearchFilter } from "../models/api.interface/address.interface";
import { IAddress } from "../models/address.model";
import { pool } from "../config/pool";

export class AddressService {
    constructor() {

    }
    public async getAddress(filter?: IAddressSearchFilter): Promise<any> {
        let query = "SELECT * from address WHERE address_id = $1";
        let values = [filter?.Id];
        let result = await pool.query(query, values);
        return result.rows;
    }

    public async postAddress(body: any[]) {
        let query = "INSERT INTO public.address(address_id,address,address2,district,city_id,postal_code,phone,last_update) VALUES ";
        let values = [];
        let ans = "";
        let x = 1;
        for (let i = 0; i < body.length; i++) {
            ans += "(";
            for (let j = 0; j < 8; j++) {
                ans += "$" + x + ",";
                x++;
            }
            ans = ans.substring(0, ans.length - 1);
            ans += "),";
            query += ans;
            values.push(body[i].address_id);
            values.push(body[i].address);
            values.push(body[i].address2);
            values.push(body[i].district);
            values.push(body[i].city_id);
            values.push(body[i].postal_code);
            values.push(body[i].phone);
            values.push(body[i].last_update);

            ans = "";
        }
        query = query.substring(0, query.length - 1);

        let result = await pool.query(query, values);

    }

    public async updateAddress(body: any[]):Promise<any> {
        let query = "UPDATE public.address SET address = $1,address2 = $2,postal_code = $3 WHERE address_id = $4 ";
        let values = [];
        values.push(body[0].address);
        values.push(body[0].address2);
        values.push(body[0].postal_code);
        values.push(body[0].address_id);
        let result = await pool.query(query, values);
        return result.rows;
    }

}