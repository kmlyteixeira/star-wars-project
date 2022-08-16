import { Arg, Query, Resolver } from "type-graphql";
import { Character } from "../models/Characters";

@Resolver()
export class CharactersResolver {

    private data: Character[] = [];
    
    @Query(() => [Character])
    async GetCharacters(
        @Arg("id") id: number
    ) {
        return this.data;
    }

}