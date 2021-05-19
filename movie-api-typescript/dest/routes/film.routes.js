"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmRoutes = void 0;
const film_controller_1 = require("../controllers/film.controller");
class FilmRoutes {
    static initRoutes(router) {
        console.log("Film Routes");
        router.get('/films', (req, res, next) => {
            const film = new film_controller_1.FilmController().getFilms(req, res);
        });
        router.post('/post', (req, res, next) => {
            const post = new film_controller_1.FilmController().postFilms(req, res);
            next();
        });
        router.delete('/delete', (req, res, next) => {
            const del = new film_controller_1.FilmController().deleteFilms(req, res);
        });
    }
}
exports.FilmRoutes = FilmRoutes;
//# sourceMappingURL=film.routes.js.map