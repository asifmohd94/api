"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const film_routes_1 = require("./film.routes");
const actor_routes_1 = require("./actor.routes");
const coustomer_routes_1 = require("./coustomer.routes");
const address_routes_1 = require("./address.routes");
const inventory_routes_1 = require("./inventory.routes");
function init(router) {
    film_routes_1.FilmRoutes.initRoutes(router);
    actor_routes_1.ActorRoutes.initRoutes(router);
    coustomer_routes_1.CustomerRoute.initRoutes(router);
    address_routes_1.AddressRoutes.initRoutes(router);
    inventory_routes_1.InventoryRoutes.initRoutes(router);
}
exports.init = init;
//# sourceMappingURL=index.js.map