# nest-mongo
Hello, there. It looks like you found `nest-mongo`! README will give you some details on usage.

### Installation
`nest-mongo` is available from NPM as `nest-mongo`.

```sh
$ npm install --save nest-mongo
```

And literally that's it. You did an NPM install.

### Configuration
First, import `MongoModule` from `nest-mongo`. Then, call `forRoot()` with your configuration.

```ts
import { MongoModule } from 'nest-mongo';

@Module({
    modules: [
        ...
        MongoModule.forRoot('mongodb://your-mdb-url', {/* optional config */})
        ...
    ]
})
```

Now, in your components or controllers, import the `Mongo` component and use it like you would the `Db` object in MongoDB driver.


