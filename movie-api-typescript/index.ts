import express from "express";
import { Middlewares } from "./middlewares";
const app = express();
Middlewares.init(app);
app.use(express.json());
app.listen(3000, () => {
    console.log("Server is up and running on port 4000");
})