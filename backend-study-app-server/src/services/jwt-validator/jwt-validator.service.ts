import { Injectable } from '@nestjs/common';
import { UserIdentityService } from '../user-identity/user-identity.service';

@Injectable()
export class JwtValidatorService {
    
    constructor(userIdentitySvc: UserIdentityService) {}

    async validateToken(token: string): Promise<boolean> {
        console.log('validing token...')

        return Promise.resolve(true)
    }
}
