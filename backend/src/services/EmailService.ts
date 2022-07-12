interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment ?: string[]; /* [] => Array*/
}

interface IMessageDTO{
    to: IMailTo;
    message: IMailMessage;
}

interface IEmailService {
    sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailService{
    sendMail({to, message}: IMessageDTO) {
        console.log('Email Enviado para ${to.name}: ${message.subject}');
    }
}

/* I = Interface */
/* DTO = Data Transfer Object */

export default EmailService;