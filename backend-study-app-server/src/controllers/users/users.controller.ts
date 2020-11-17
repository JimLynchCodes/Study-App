import { Controller, Get, Param, Query, Header, Request, HttpException, UnauthorizedException } from '@nestjs/common';
import { JwtValidatorService } from 'src/services/jwt-validator/jwt-validator.service';

@Controller('users')
export class UsersController {

    constructor(private jwtValidator: JwtValidatorService) {}

    @Get('hello')
    getHello(): string {
        return 'users hello'
    }

    @Get(':app')
    async getAllUsersForApp(@Param('app') appName: string, @Request() req: any): Promise<string | UnauthorizedException> {

        console.log('appName ', appName)
        console.log('req.headers ', req.headers)

        const headers = req.headers

        console.log('checking token ', headers?.authorization)

        console.log('doing on find on users collection of db named ', appName)

        const isValid = await this.jwtValidator.validateToken(headers?.authorization)

        if (!isValid) {
            return new UnauthorizedException()
        }

        return Promise.resolve('all users...')
    }

}