import { Router } from "express";
import { ActorController } from "../controllers/actor.controller";

export class ActorRoutes {
    public static initRoutes(router: Router) {

        router.get('/actors', (req, res, next) => {
            const film = new ActorController().getActors(req, res);
        });
        router.post('/post/actor', (req, res, next) => {
            console.log(req.body);
            const actor = new ActorController().postActors(req, res);
        })

        router.put('/update/actor', (req, res, next) => {
            console.log(req.body);
            const actor = new ActorController().updateActors(req, res);

        })

        router.delete('/delete/actor', (req, res, next) => {
            console.log(req.query);
            const del = new ActorController().deleteActors(req, res);
        })

    }
}