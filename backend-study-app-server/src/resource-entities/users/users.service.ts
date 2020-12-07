import { Injectable, UnauthorizedException } from '@nestjs/common';
import { MongoService } from 'src/util-services/mongo/mongo.service';
import { User } from './user.model';
import { ObjectId } from 'mongodb';

@Injectable()
export class UsersService {

    constructor(private mongoSvc: MongoService) { }

    async getAllUsersForApp(appName: string) {

        const db = await this.mongoSvc.getDb(appName);

        return db.collection(process.env.MONGO_USERS_COLLECTION).find({})
    }
    
    async getUser(appName: string, userId: string): Promise<User> {

        const db = await this.mongoSvc.getDb(appName);
        
        return db.collection(process.env.MONGO_USERS_COLLECTION)
        .findOne({ _id: new ObjectId(userId) })
    }
    
    async updateMyUserData(appName: string, user: User): Promise<string | UnauthorizedException> {
        
        return new Promise( async resolve => {

            const db = await this.mongoSvc.getDb(appName);
            
            return Promise.resolve('foo')
            // return db.collection(process.env.MONGO_USERS_COLLECTION)
            // .updateOne(user)
        })
    }

}
