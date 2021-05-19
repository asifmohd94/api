"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmController = void 0;
const film_service_1 = require("../services/film.service");
class FilmController {
    constructor() {
        this.filmService = new film_service_1.FilmService();
    }
    async getFilms(req, res) {
        if (typeof (req.query.id) !== "string") {
            res.status(400).send("Error");
        }
        else {
            let ans = await this.filmService.getFilms({ Id: parseInt(req.query.id) });
            res.send(ans);
        }
    }
    async postFilms(req, res) {
        console.log(req.body);
        let ans = new film_service_1.FilmService().postFilms(req.body);
        res.send("Added");
    }
    async deleteFilms(req, res) {
        let obj = { Id: req.query.id };
        if (typeof (obj) != "string") {
            res.status(400).send("BAd request");
        }
        else {
            parseInt(obj);
            let ans = new film_service_1.FilmService().deleteFilms(obj);
            res.send(ans);
        }
    }
}
exports.FilmController = FilmController;
//# sourceMappingURL=film.controller.js.map