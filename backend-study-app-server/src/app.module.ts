import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './controllers/users/users.controller';
import { QuestionFeedbackController } from './controllers/question-feedback/question-feedback.controller';
import { JwtValidatorService } from './services/jwt-validator/jwt-validator.service';
import { UserIdentityService } from './services/user-identity/user-identity.service';
import { AuthenticationMiddleware } from './auth/application-middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.dev'],
    })
  ],
  controllers: [AppController, UsersController, QuestionFeedbackController],
  providers: [AppService, JwtValidatorService, UserIdentityService],
})
export class AppModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes(
        { path: '/users(*)', method: RequestMethod.ALL },
        { path: '/question-feedback(*)', method: RequestMethod.ALL },
      );
  }
}
