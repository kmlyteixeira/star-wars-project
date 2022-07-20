import { Request, Response } from "express"
import { AddPurchasedMovie } from "../services/AddPurchasedMovie"

export class AddMovieController {
    async handle(request: Request, response: Response) {
        const { name_movie, acquisition_date, number_times, sale_value, comments } = request.body

        const service = new AddPurchasedMovie();

        const result = await service.execute({name_movie, acquisition_date, number_times, sale_value, comments})

        return response.json(result);
    }
}