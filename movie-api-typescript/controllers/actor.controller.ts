import { Request, Response } from "express";
import { ActorService } from "../services/actor.service";


export class ActorController {  
    actorService: ActorService;
    constructor() {
        this.actorService = new ActorService();
    }
    public async getActors(req: Request, res: Response) {  
        if (typeof (req.query.id) !== "string") {
            res.status(400).send("Error");
        }
        else {
            let ans = await this.actorService.getActors({ Id: parseInt(req.query.id) });
            res.send(ans);
        }
    }

    public async postActors(req: Request, res: Response) {
        try {
            console.log(req.body);
            let ans = new ActorService().postActors(req.body);
            res.send("Created");
        } catch (err) {
            console.log(err)
            res.status(500)
                .send({ message: "Error Occured" })
        }

    }

    public async updateActors(req: Request, res: Response) {
        try {
            let ans = new ActorService().updateActor(req.body);
            res.send((await ans).rows);
        } catch (err) {
            console.log(err);
            res.status(400).send({ message: "Error Occured" });
        }
    }

    public async deleteActors(req: Request, res: Response) {
        try {
            // let obj = { Id: req.query.id }
            // console.log(obj.Id);
            if (typeof (req.query.id) != "string") {
                res.status(500)
                    .send({ message: "Error occured" })
            } else {
                // parseInt(obj);
                console.log("Inside Controller")
                let abc = parseInt(req.query.id);
                let ans = new ActorService().deleteActors({ Id: abc });
                res.send(ans);
            }
        } catch (err) {
            console.log(err);
            res.status(404)
                .send({ message: "Error Occured" })
        }
    }

}