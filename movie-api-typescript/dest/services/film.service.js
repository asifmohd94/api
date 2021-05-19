"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmService = void 0;
const pool_1 = require("../config/pool");
class FilmService {
    constructor() {
        // pool
    }
    async getFilms(filter) {
        let query = "SELECT * from film WHERE film_id = $1";
        let values = [filter?.Id];
        let result = await pool_1.pool.query(query, values);
        return result.rows;
    }
    async postFilms(body) {
        let query = "INSERT INTO public.film(film_id,title,description,release_year,language_id,rental_rate,replacement_cost,rating,last_update,full_text,rental_duration,length) VALUES ";
        let values = [];
        let ans = "";
        let x = 1;
        for (let i = 0; i < body.length; i++) {
            ans += "(";
            for (let j = 0; j < 12; j++) {
                ans += "$" + x + ",";
                x++;
            }
            ans = ans.substring(0, ans.length - 1);
            ans += "),";
            query += ans;
            values.push(body[i].film_id);
            values.push(body[i].title);
            values.push(body[i].description);
            values.push(body[i].release_year);
            values.push(body[i].language_id);
            values.push(body[i].rental_rate);
            values.push(body[i].replacement_cost);
            values.push(body[i].rating);
            values.push(body[i].length);
            values.push(body[i].rental_duration);
            values.push(body[i].last_update);
            ans = "";
        }
        query = query.substring(0, query.length - 1);
        const result = await pool_1.pool.query(query, values);
        return result;
    }
    async deleteFilms(filter) {
        let query = "DELETE FROM public.film WHERE film_id = $1";
        let values = [filter?.Id];
        let result = await pool_1.pool.query(query, values);
        return result.rows;
    }
}
exports.FilmService = FilmService;
//# sourceMappingURL=film.service.js.map