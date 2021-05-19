"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorController = void 0;
const actor_service_1 = require("../services/actor.service");
class ActorController {
    constructor() {
        this.actorService = new actor_service_1.ActorService();
    }
    async getActors(req, res) {
        if (typeof (req.query.id) !== "string") {
            res.status(400).send("Error");
        }
        else {
            let ans = await this.actorService.getActors({ Id: parseInt(req.query.id) });
            res.send(ans);
        }
    }
    async postActors(req, res) {
        try {
            console.log(req.body);
            let ans = new actor_service_1.ActorService().postActors(req.body);
            res.send("Created");
        }
        catch (err) {
            console.log(err);
            res.status(500)
                .send({ message: "Error Occured" });
        }
    }
    async updateActors(req, res) {
        try {
            let ans = new actor_service_1.ActorService().updateActor(req.body);
            res.send((await ans).rows);
        }
        catch (err) {
            console.log(err);
            res.status(400).send({ message: "Error Occured" });
        }
    }
    async deleteActors(req, res) {
        try {
            // let obj = { Id: req.query.id }
            // console.log(obj.Id);
            if (typeof (req.query.id) != "string") {
                res.status(500)
                    .send({ message: "Error occured" });
            }
            else {
                // parseInt(obj);
                console.log("Inside Controller");
                let abc = parseInt(req.query.id);
                let ans = new actor_service_1.ActorService().deleteActors({ Id: abc });
                res.send(ans);
            }
        }
        catch (err) {
            console.log(err);
            res.status(404)
                .send({ message: "Error Occured" });
        }
    }
}
exports.ActorController = ActorController;
//# sourceMappingURL=actor.controller.js.map