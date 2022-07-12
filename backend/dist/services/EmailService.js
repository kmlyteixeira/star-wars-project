"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailService {
    sendMail({ to, message }) {
        console.log('Email Enviado para ${to.name}: ${message.subject}');
    }
}
/* I = Interface */
/* DTO = Data Transfer Object */
exports.default = EmailService;
