import { Injectable, Scope } from '@nestjs/common';

@Injectable({scope: Scope.REQUEST})
export class UserIdentityService {

    userIdentity

    setUserIdentity(identity) {

        console.log('user identity decoded stuff: ', identity)

        this.userIdentity = identity
    }

}
