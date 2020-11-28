import { Injectable } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';

@Injectable()
export class MongoService {

    public mongoClient
    private db: Db

    constructor() { }

    async getDb(dbName: string): Promise<Db> {

        if (this.db)
            return this.db;

        if (!this.mongoClient)
            this.mongoClient = await MongoClient.connect(process.env.MONGO_CONNECTION_STRING)

        this.db = await this.mongoClient.db(dbName)

        return this.db
    }

    async closeMongoConnection() {
        await this.mongoClient.close(true);
    }
}
