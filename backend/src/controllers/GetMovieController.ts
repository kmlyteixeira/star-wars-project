import { Request, Response } from "express";
import { GetPurchasedMovie } from "../services/GetPurchasedMovie";

export class GetMovieController {
    async handle(request: Request, response: Response) {
        const service = new GetPurchasedMovie();

        const movies = await service.execute();

        return response.json();
    }
}