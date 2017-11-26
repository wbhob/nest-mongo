import { Controller, Get, Response } from '@nestjs/common';
import { Mongo } from '../../src/mongo.component';

@Controller()
export class TestController {

    constructor(public mongo: Mongo) {

    }

    @Get('/write')
    async  testWrite( @Response() res) {
        let coll = await this.mongo.collection('test').insert({ test: true });
        if (coll)
            res.status(200).json(coll);
        else
            res.status(404).send('Nothing found');
    }

    @Get('/read')
    async  testRead( @Response() res) {
        let coll = await this.mongo.collection('test').find().toArray();
        if (coll[0])
            res.status(200).json(coll);
        else
            res.status(404).send('Nothing found');
    }
}
