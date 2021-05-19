import { Router } from "express";
import { FilmRoutes } from "./film.routes";
import {ActorRoutes} from "./actor.routes";
import {CustomerRoute} from "./coustomer.routes"
import { AddressRoutes } from "./address.routes";
import {InventoryRoutes} from "./inventory.routes"

export function init(router: Router) {
    FilmRoutes.initRoutes(router);
    ActorRoutes.initRoutes(router);
    CustomerRoute.initRoutes(router);
    AddressRoutes.initRoutes(router);
    InventoryRoutes.initRoutes(router);
}