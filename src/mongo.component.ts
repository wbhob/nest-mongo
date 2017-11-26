import { Component } from '@nestjs/common';
import { Admin, Collection, CollectionCreateOptions, CommandCursor, Db, DbAddUserOptions, DbCollectionOptions, IndexOptions, MongoClient, MongoClientOptions, MongoError, Mongos, ReadPreference, ReplSet, Server } from 'mongodb';


export type Default = any;

@Component()
export class Mongo {
  static db: Db;

  static config: MongoClientOptions;
  static url: string;

  static configure(url: string, conf?: MongoClientOptions) {
    this.url = url;
    if (conf) {
      this.config = conf;
    }
  }

  get serverConfig(): Server | ReplSet | Mongos {
    return Mongo.db.serverConfig;
  }
  set serverConfig(serverConfig: Server | ReplSet | Mongos) {
    Mongo.db.serverConfig = serverConfig;
  }

  get bufferMaxEntries(): number {
    return Mongo.db.bufferMaxEntries;
  }
  set bufferMaxEntries(bufferMaxEntries: number) {
    Mongo.db.bufferMaxEntries = bufferMaxEntries;
  }

  get databaseName(): string {
    return Mongo.db.databaseName;
  }
  set databaseName(databaseName: string) {
    Mongo.db.databaseName = databaseName;
  }

  get options(): any {
    return Mongo.db.options;
  }
  set options(options: any) {
    Mongo.db.options = options;
  }

  get native_parser(): boolean {
    return Mongo.db.native_parser;
  }
  set native_parser(native_parser: boolean) {
    Mongo.db.native_parser = native_parser;
  }

  get slaveOk(): boolean {
    return Mongo.db.slaveOk;
  }
  set slaveOk(slaveOk: boolean) {
    Mongo.db.slaveOk = slaveOk;
  }

  get writeConcern(): any {
    return Mongo.db.writeConcern;
  }
  set writeConcern(writeConcern: any) {
    Mongo.db.writeConcern = writeConcern;
  }

  constructor() {
    const initCallback = (err: MongoError, db: Db) => {
      if (err) {
        return console.error('MONGODB ERROR: ' + err.message);
      }
      Mongo.db = db;
    };

    if (Mongo.config) {
      MongoClient.connect(Mongo.url, Mongo.config, initCallback);
    } else {
      MongoClient.connect(Mongo.url, initCallback);
    }
  }

  addUser(username: string, password: string, options?: DbAddUserOptions):
    Promise<any> {
    return Mongo.db.addUser(username, password, options);
  }

  admin(): Admin {
    return Mongo.db.admin();
  }

  authenticate(userName: string, password: string, options?: {
    authMechanism: string
  }): Promise<any> {
    return Mongo.db.authenticate(userName, password, options);
  }

  close(forceClose?: boolean): Promise<void> {
    return Mongo.db.close(forceClose);
  }

  collection<TSchema = Default>(name: string, options?: DbCollectionOptions):
    Collection<TSchema> {
    return (<any>Mongo.db).collection(name, options);
  }

  collections(): Promise<Collection<Default>[]> {
    return Mongo.db.collections();
  }

  command(command: Object, options?: { readPreference: ReadPreference | string }):
    Promise<any> {
    return Mongo.db.command(command, options);
  }

  createCollection<TSchema = Default>(
    name: string,
    options?: CollectionCreateOptions): Promise<Collection<TSchema>> {
    return Mongo.db.createCollection(name, options);
  }

  createIndex(name: string, fieldOrSpec: string | Object, options?: IndexOptions):
    Promise<any> {
    return Mongo.db.createIndex(name, fieldOrSpec, options);
  }

  dropCollection(name: string): Promise<boolean> {
    return Mongo.db.dropCollection(name);
  }

  dropDatabase(): Promise<any> {
    return Mongo.db.dropDatabase();
  }

  executeDbAdminCommand(command: Object, options?: {
    readPreference?: ReadPreference | string,
    maxTimeMS?: number
  }): Promise<any> {
    return Mongo.db.executeDbAdminCommand(command, options);
  }

  indexInformation(name: string, options?: {
    full?: boolean,
    readPreference?: ReadPreference | string
  }): Promise<any> {
    return Mongo.db.indexInformation(name, options);
  }

  listCollections(filter: Object, options?: {
    batchSize?: number,
    readPreference?: ReadPreference | string
  }): CommandCursor {
    return Mongo.db.listCollections(filter, options);
  }

  logout(options?: { dbName?: string }): Promise<any> {
    return Mongo.db.logout(options);
  }

  open(): Promise<Db> {
    return Mongo.db.open();
  }

  removeUser(username: string, options?: {
    w?: number | string,
    wtimeout?: number,
    j?: boolean
  }): Promise<any> {
    return Mongo.db.removeUser(username, options);
  }

  renameCollection<TSchema = Default>(
    fromCollection: string, toCollection: string,
    options?: { dropTarget?: boolean }): Promise<Collection<TSchema>> {
    return Mongo.db.renameCollection(fromCollection, toCollection, options);
  }

  stats(options?: { scale?: number }): Promise<any> {
    return Mongo.db.stats(options);
  }
}
