import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

(async () =>{
    let app = await NestFactory.create(AppModule);
    app.listen(3000);
})()
