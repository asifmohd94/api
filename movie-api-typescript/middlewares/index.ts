import { Express, Router } from "express";
import express from "express";
import { init } from "../routes/index";

export class Middlewares {

    public static init(app: Express) {
        console.log("Middleware");
        const router = Router();
        app.use(express.json());
        app.use("/api", router);
        init(router);
    }

}