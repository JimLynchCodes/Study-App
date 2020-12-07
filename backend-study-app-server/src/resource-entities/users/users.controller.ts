import { Controller, Get, Param, Query, Header, Request, HttpException, UnauthorizedException, Post, Put, Patch } from '@nestjs/common';
import { JwtValidatorService } from 'src/util-services/jwt-validator/jwt-validator.service';
import { User } from './user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private jwtValidator: JwtValidatorService,
        private usersSvc: UsersService) { }

    @Get('hello')
    getHello(): string {
        return 'users hello'
    }

    @Get(':app')  // where app value is "enrolled-agent", "random-trivia", etc. (and also used as the mongo "database name")
    async getAllUsersForApp(@Param('app') appName: string, @Request() req: any): Promise<User[] | UnauthorizedException> {

        console.log('appName ', appName)
        console.log('req.headers ', req.headers)

        const headers = req.headers

        console.log('checking token ', headers?.authorization)

        console.log('doing on find on users collection of db named ', appName)

        const [isValid, userId] = await this.jwtValidator.validateToken(headers?.authorization)

        if (!isValid) {
            return new UnauthorizedException()
        }

        return this.usersSvc.getAllUsersForApp(appName)
        // return Promise.resolve('all users...')
    }

    @Get(':app/me')  // where app value is "enrolled-agent", "random-trivia", etc. (and also used as the mongo "database name")
    async getMyUserData(@Param('app') appName: string, @Request() req: any): Promise<User | UnauthorizedException> {

        console.log('appName ', appName)
        console.log('req.headers ', req.headers)

        const headers = req.headers

        console.log('checking token ', headers?.authorization)

        console.log('doing on find on users collection of db named ', appName)

        const [isValid, userId] = await this.jwtValidator.validateToken(headers?.authorization)

        if (!isValid) {
            return new UnauthorizedException()
        }
        
        return this.usersSvc.getUser(appName, userId)
    }
    
    /**
     * 
     *  Takes any subset of the "User" document and updates object. 
     * 
     *  If no user obejct exists for the user, creates a deafult one and updates it.
     * 
     * @param appName 
     * @param req 
     */
    @Patch(':app')
    // async updateMyUserData(@Param('app') appName: string, @Request() req: User): Promise<string | UnauthorizedException> {
    async updateMyUserData(@Param('app') appName: string, @Request() req: User): Promise<string | UnauthorizedException> {
        
        return this.usersSvc.updateMyUserData(appName, req);
        return 'foo'
    }

    // @Post(':app/:questionId')
    // addNewUser() {

    // }

}
