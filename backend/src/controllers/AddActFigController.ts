import { Request, Response } from "express"
import { AddPurchasedActFig } from "../services/AddPurchasedActFig"

export class AddActFigController {
    async handle(request: Request, response: Response) {
        const { acquisition_date, comments, localization } = request.body

        const service = new AddPurchasedActFig();

        const result = await service.execute({acquisition_date, comments, localization})

        return response.json(result);
    }
}