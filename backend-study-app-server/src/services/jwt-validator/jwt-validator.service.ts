import { Injectable } from '@nestjs/common';
import { UserIdentityService } from '../user-identity/user-identity.service';
import jwt_decode from 'jwt-decode';

@Injectable()
export class JwtValidatorService {

    constructor(userIdentitySvc: UserIdentityService) { }

    async validateToken(token: string): Promise<boolean> {
        console.log('validing token...')

        var decoded = jwt_decode(token);

        console.log(decoded);

        return Promise.resolve(true)
    }
}
