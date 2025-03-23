import { Body, Controller, Post } from "@nestjs/common";
import { ContactDto } from "src/dto/contact.dto";
import { ContactService } from "./contact.service";

@Controller('/contact')
export class ContactController {
    constructor(private readonly contactService: ContactService) {}

    @Post()
    async create(@Body() dto: ContactDto) {
        console.log("🚀 Запит отримано, body:", dto);
        return this.contactService.create(dto);
    }
}
