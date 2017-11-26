import { Module } from '@nestjs/common';
import { MongoClientOptions } from 'mongodb';
import { Mongo } from './mongo.component';


@Module({
  components: [
    Mongo
  ],
  exports: [
    Mongo
  ]
})
export class MongoModule {
  static forRoot(url: string, conf?: MongoClientOptions) {
    Mongo.configure(url, conf);
    return MongoModule;
  }
}
