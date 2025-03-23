import { Module } from '@nestjs/common';
import { ContactModule } from './schemas/contact.module';

@Module({
  imports: [ContactModule]
})
export class AppModule {}
