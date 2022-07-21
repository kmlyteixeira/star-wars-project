import { RandomUUIDOptions } from "crypto";
import { getRepository } from "typeorm";
import { Movies } from "../entities/Movies";

type MoviesRequest = {
    id: string;
    name_movie: string;
    acquisition_date: Date;
    number_times: number;
    sale_value: number;
    comments: string;
    id_user: string;
}

export class AddPurchasedMovie {

    async execute(
        {
            id,
            name_movie, 
            acquisition_date,
            number_times,
            sale_value,
            comments,
            id_user
        }:MoviesRequest ): Promise<Movies> {
            const repo = getRepository(Movies);

            const movies = repo.create({
                id,
                name_movie,
                acquisition_date,
                number_times,
                sale_value,
                comments,
                id_user
            })

            await repo.save(movies);

            return movies;
        }
}