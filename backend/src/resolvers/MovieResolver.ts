import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Movie } from "../models/Movie";
import crypto from "crypto";

@Resolver()
export class MovieResolver {

    private data: Movie[] = [];
    
    @Query(() => [Movie])
    async GetMovieCollection() {
        return this.data;
    }

    @Mutation(() => Movie)
    async AddMovie(
        @Arg("title") title: string,
        @Arg("acquired") acquired: string,
        @Arg("value") value: string,
        @Arg("comment") comment: string
    ) {
        const movie = {id: crypto.randomUUID(), title, acquired, value, comment};

        this.data.push(movie);

        return movie;
    }
}