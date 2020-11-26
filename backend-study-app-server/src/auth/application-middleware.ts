import { NestMiddleware } from '@nestjs/common';
import * as jwt from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';

export class AuthenticationMiddleware implements NestMiddleware {
  use(req, res, next) {

    console.log('jwksUri', process.env.AUTH0_JWKS_URI)
    console.log('audience', process.env.AUTH0_AUDIENCE)
    console.log('issuer', process.env.AUTH0_ISSUER)
    console.log('using the auth middleware!')

    jwt({
      secret: expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${process.env.DOMAIN}/.well-known/jwks.json`,
      }),

      // audience: 'http://localhost:3000',
      audience: 'random.trivia://study-apps.us.auth0.com/ios/random.trivia/',
      issuer: `https://${process.env.DOMAIN}/`,
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
      next();
    });
  };
}