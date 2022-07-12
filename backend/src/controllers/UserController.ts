import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Kemily', email: 'kmly@teixeira.com.br' },
]

export default {
    async index(req: Request, res: Response) {
        res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: { 
                name: 'Kemily', 
                email: 'kmly@rosa.com.br' 
            },
            message: { 
                subject: 'Bem-vindo ao sistema', 
                body: 'Seja bem-vindo' }
        });

        return res.send();
    }
};

