"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorRoutes = void 0;
const actor_controller_1 = require("../controllers/actor.controller");
class ActorRoutes {
    static initRoutes(router) {
        router.get('/actors', (req, res, next) => {
            const film = new actor_controller_1.ActorController().getActors(req, res);
        });
        router.post('/post/actor', (req, res, next) => {
            console.log(req.body);
            const actor = new actor_controller_1.ActorController().postActors(req, res);
        });
        router.put('/update/actor', (req, res, next) => {
            console.log(req.body);
            const actor = new actor_controller_1.ActorController().updateActors(req, res);
        });
        router.delete('/delete/actor', (req, res, next) => {
            console.log(req.query);
            const del = new actor_controller_1.ActorController().deleteActors(req, res);
        });
    }
}
exports.ActorRoutes = ActorRoutes;
//# sourceMappingURL=actor.routes.js.map