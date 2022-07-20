import { getRepository } from "typeorm";
import { ActionFigure } from "../entities/ActionFigure";

type ActionFigureRequest = {
    acquisition_date: Date;
    comments: string;
    localization: string;
}

export class AddPurchasedActFig {

    async execute(
        {
            acquisition_date,
            comments, 
            localization
        }:ActionFigureRequest ): Promise<ActionFigure> {
            const repo = getRepository(ActionFigure);

            const actionFigure = repo.create({
                acquisition_date,
                comments,
                localization
            })

            await repo.save(actionFigure);

            return actionFigure;
        }
}