import { Injectable } from '@nestjs/common';
import { UserIdentityService } from '../user-identity/user-identity.service';
import jwt_decode from 'jwt-decode';

export type IsValidAndUserId = [boolean, string]

@Injectable()
export class JwtValidatorService {

    constructor(private userIdentitySvc: UserIdentityService) { }

    async validateToken(token: string): Promise<IsValidAndUserId> {
        console.log('validing token...')

        var decoded = jwt_decode(token);

        console.log(decoded);

        this.userIdentitySvc.setUserIdentity(decoded)
        return Promise.resolve([true, 'foo'])
    }
}
