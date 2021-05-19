import {Pool} from "pg";

export const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"movie_rental",
    password:"Pass123",
    max:5
})

