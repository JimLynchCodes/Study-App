import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './resource-entities/users/users.controller';
import { QuestionFeedbackController } from './resource-entities/question-feedback/question-feedback.controller';
import { JwtValidatorService } from './util-services/jwt-validator/jwt-validator.service';
import { AuthenticationMiddleware } from './auth/application-middleware';
import { ConfigModule } from '@nestjs/config';
import { MongoService } from './util-services/mongo/mongo.service';
import { UsersService } from './resource-entities/users/users.service';
import { QuestionFeedbackService } from './resource-entities/question-feedback/question-feedback.service';
import { UserIdentityService } from './util-services/user-identity/user-identity.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.dev', '.env'],
    })
  ],
  controllers: [AppController, UsersController, QuestionFeedbackController],
  providers: [AppService, JwtValidatorService, MongoService, UsersService, QuestionFeedbackService, UserIdentityService],
})
export class AppModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes(
        { path: '/users(*)', method: RequestMethod.ALL }
      );
  }
}
