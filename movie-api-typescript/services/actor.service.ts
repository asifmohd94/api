import { IActorSearchFilter } from "../models/api.interface/actor.interface";
import { IActor } from "../models/actor.model";

import { pool } from "../config/pool";

export class ActorService {
    constructor(){
        
    }
    public async getActors(filter?:IActorSearchFilter): Promise<any> {
        let query = "SELECT * from actor WHERE actor_id = $1";
        let values = [filter?.Id];
        let result = await pool.query(query,values);
        return result.rows;
    }

    public async postActors(body: any[]) {
        let query = "INSERT INTO public.actor(actor_id,first_name,last_name,last_update) VALUES ";
        let values = [];
        let ans = "";
        let x = 1;
        for (let i = 0; i < body.length; i++) {
            ans += "(";
            for (let j = 0; j < 4; j++) {
                ans += "$" + x + ",";
                x++;
            }
            ans = ans.substring(0, ans.length - 1);
            ans += "),";
            query += ans;
            values.push(body[i].actor_id);
            values.push(body[i].first_name);
            values.push(body[i].last_name);
            values.push(body[i].last_update);

            ans = "";
        }
        query = query.substring(0, query.length - 1);

        let result = await pool.query(query, values);

    }

    public async updateActor(body: any[]) {
        let query = "UPDATE public.actor SET last_name = $1 WHERE actor_id = $2 ";
        let values = [];
        values.push(body[0].last_name);
        values.push(body[0].actor_id);
        let result = await pool.query(query, values);
        return result;
    }

    public async deleteActors(filter?: IActorSearchFilter) {
        let query = "DELETE FROM public.actor WHERE actor_id = $1";
        let values = [filter?.Id];
        let result = await pool.query(query, values);
        return result;
    }

}