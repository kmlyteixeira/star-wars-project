import { getRepository } from "typeorm";
import { Movies } from "../entities/Movies";

type MoviesRequest = {
    name_movie: string;
    acquisition_date: Date;
    number_times: number;
    sale_value: number;
    comments: string;
}

export class AddPurchasedMovie {

    async execute(
        {
            name_movie, 
            acquisition_date,
            number_times,
            sale_value,
            comments
        }:MoviesRequest ): Promise<Movies> {
            const repo = getRepository(Movies);

            const movies = repo.create({
                name_movie,
                acquisition_date,
                number_times,
                sale_value,
                comments
            })

            await repo.save(movies);

            return movies;
        }
}