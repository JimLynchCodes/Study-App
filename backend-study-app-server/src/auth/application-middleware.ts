import { NestMiddleware } from '@nestjs/common';
import * as jwt from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';

export class AuthenticationMiddleware implements NestMiddleware {
  use(req, res, next) {

    console.log('using the auth middleware!')

    // next()

    jwt({
      secret: expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // jwksUri: 'https://${DOMAIN}/.well-known/jwks.json',
        jwksUri: 'https://study-apps.us.auth0.com/.well-known/jwks.json',
      }),

      audience: 'http://localhost:3000',
      // audience: 'random.trivia://study-apps.us.auth0.com/ios/random-trivia/',
      // audience: 'random.trivia://study-apps.us.auth0.com/ios/random-trivia/',
      // issuer: 'https://${DOMAIN}/',
      issuer: 'https://study-apps.us.auth0.com/',
      algorithms: ['RS256'],
    })(req, res, err => {
      if (err) {
        const status = err.status || 500;
        const message =
          err.message || 'Sorry, we were unable to process your request.';
        return res.status(status).send({
          message,
        });
      }

      console.log('token looks good!')

      // TODO - decode token and identify a user from it.

      next();
    });
  };
}