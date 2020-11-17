import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {

    console.log('hey, we\'re in the admi gaurd ', context)
    const user = context.getArgs()[0].user['http://localhost:3000/roles'] || '';
    return user.indexOf('admin') > -1;
  }
}