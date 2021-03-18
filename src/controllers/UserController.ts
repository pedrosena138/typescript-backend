import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Pedro', email: 'pedro@email.com' },
    { name: 'Diego', email: 'diego@email.com' },
    { name: 'João', email: 'joao@email.com' },
]

const emailService = new EmailService();

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        try {

            const messageBody = {
                to: users[0],
                message: {
                    subject: 'Bem-vindo ao sistema', body: 'Olá, seja bem-vindo!!!'
                }
            }

            const email = emailService.sendMail(messageBody);

            return res.send(email);

        } catch (error) {
            return res.send(error).status(500);
        }
        
    }
}