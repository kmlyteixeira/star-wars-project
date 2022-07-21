import { Request, Response } from "express"
import { AddPurchasedMovie } from "../services/AddPurchasedMovie"

export class AddMovieController {
    async handle(request: Request, response: Response) {
        const { id, name_movie, acquisition_date, number_times, sale_value, comments, id_user} = request.body

        const service = new AddPurchasedMovie();

        const result = await service.execute({id, name_movie, acquisition_date, number_times, sale_value, comments, id_user})

        return response.json(result);
    }
}