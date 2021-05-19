"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorService = void 0;
const pool_1 = require("../config/pool");
class ActorService {
    constructor() {
    }
    async getActors(filter) {
        let query = "SELECT * from actor WHERE actor_id = $1";
        let values = [filter?.Id];
        let result = await pool_1.pool.query(query, values);
        return result.rows;
    }
    async postActors(body) {
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
        let result = await pool_1.pool.query(query, values);
    }
    async updateActor(body) {
        let query = "UPDATE public.actor SET last_name = $1 WHERE actor_id = $2 ";
        let values = [];
        values.push(body[0].last_name);
        values.push(body[0].actor_id);
        let result = await pool_1.pool.query(query, values);
        return result;
    }
    async deleteActors(filter) {
        let query = "DELETE FROM public.actor WHERE actor_id = $1";
        let values = [filter?.Id];
        let result = await pool_1.pool.query(query, values);
        return result;
    }
}
exports.ActorService = ActorService;
//# sourceMappingURL=actor.service.js.map