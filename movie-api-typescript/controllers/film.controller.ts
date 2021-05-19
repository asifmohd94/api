import { Request, Response } from "express";
import { FilmService } from "../services/film.service"

export class FilmController {
    filmService: FilmService;
    constructor() {
        this.filmService = new FilmService();
    }
    public async getFilms(req: Request, res: Response) {
        if (typeof (req.query.id) !== "string") {
            res.status(400).send("Error");
        }
        else {
            let ans = await this.filmService.getFilms({ Id: parseInt(req.query.id) });
            res.send(ans);

        }
    }

    public async postFilms(req: Request, res: Response) {
        console.log(req.body);
        let ans = new FilmService().postFilms(req.body);
        res.send("Added");
    }

    public async deleteFilms(req: Request, res: Response) {
        let obj = { Id: req.query.id };
        if (typeof (obj) != "string") {
            res.status(400).send("BAd request");
        } else {
            parseInt(obj);
            let ans = new FilmService().deleteFilms(obj);
            res.send(ans);
        }
    }

}