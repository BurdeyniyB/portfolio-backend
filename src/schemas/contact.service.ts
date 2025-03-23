import { Injectable } from "@nestjs/common";
import axios from "axios";
import { ContactDto } from "src/dto/contact.dto";

@Injectable()
export class ContactService {
    private readonly botToken = process.env.TOKEN_BOT;
    private readonly chatId = process.env.CHAT_ID; 

    async create(dto: ContactDto) {
        const message = `
📩 *Нове повідомлення з сайту*  
👤 *Ім'я:* ${dto.firstName} ${dto.lastName}  
📧 *Email:* ${dto.email}  
📞 *Телефон:* ${dto.phone}  
💬 *Повідомлення:*  
${dto.text}`;

        try {
            const telegramUrl = `https://api.telegram.org/bot${this.botToken}/sendMessage`;
            await axios.post(telegramUrl, {
                chat_id: this.chatId,
                text: message,
                parse_mode: "Markdown",
            });

            return { success: true, message: "Message was sended succesful!" };
        } catch (error) {
            console.error("Mistake when message was sended in telegram:", error);
            return { success: false, message: "Mistake during sending!" };
        }
    }
}
