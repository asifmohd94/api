import { Router } from "express";
import { FilmController } from "../controllers/film.controller";

export class FilmRoutes {
    public static initRoutes(router: Router) {
        console.log("Film Routes");
        router.get('/films', (req, res, next) => {
            const film = new FilmController().getFilms(req, res);
            
        });
        router.post('/post', (req, res, next) => {
            const post = new FilmController().postFilms(req, res);
            next();
        })
        router.delete('/delete', (req, res, next) => { 
            const del = new FilmController().deleteFilms(req,res);
        })

    }
}