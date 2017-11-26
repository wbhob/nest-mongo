import { Module } from '@nestjs/common';
import { MongoModule } from '../../src/mongo.module';
import { TestController } from './test-controller';
@Module({
    modules: [
        MongoModule.forRoot('mongodb://localhost/nest-mongo-test')
    ],
    controllers: [
        TestController
    ]
})
export class AppModule { }
