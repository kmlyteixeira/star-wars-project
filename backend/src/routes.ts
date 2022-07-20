import { Router } from "express";
import { AddActFigController } from "./controllers/AddActFigController";
import { AddMovieController } from "./controllers/AddMovieController";
import { GetMovieController } from "./controllers/GetMovieController";

const routes = Router();

routes.post("/ActionFigure", new AddActFigController().handle);
routes.post("/Movies", new AddMovieController().handle);
routes.get("/Movies", new GetMovieController().handle);

export { routes };