import { getRepository } from "typeorm";
import { Movies } from "../entities/Movies";


export class GetPurchasedMovie {
    async execute() {
        const repo = getRepository(Movies);

        const categories = await repo.find();

        return categories;
    }
}