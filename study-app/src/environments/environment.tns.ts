import { environment as eaDevEnvironment } from './enrolled-agent/environment.dev';
import { environment as eaProdEnvironment } from './enrolled-agent/environment.prod';
import { environment as satDevEnvironment } from './sat/environment.dev';
import { environment as satProdEnvironment } from './sat/environment.prod';
import { environment as randomTriviaDevEnvironment } from './random-trivia/environment.dev';
import { environment as randomTriviaProdEnvironment } from './random-trivia/environment.prod';

export const environment = (() => {
  let envVars;


  if (
    typeof process !== 'undefined' && process &&
    Object.prototype.hasOwnProperty.call(process, 'env') && process.env &&
    Object.prototype.hasOwnProperty.call(process.env, 'environment') && process.env.environment
  ) {
    switch (process.env.environment) {
      case 'ea.prod':
        envVars = eaProdEnvironment;
        break;

      case 'ea.dev':
        envVars = eaDevEnvironment;
        break;

      case 'sat.prod':
        envVars = satProdEnvironment;
        break;

      case 'sat.dev':
        envVars = satDevEnvironment;
        break;

      case 'random-trivia.prod':
        envVars = randomTriviaProdEnvironment;
        break;

      case 'random-trivia.dev':
        envVars = randomTriviaDevEnvironment;
        break;

      // TODO: Add additional environment (e.g. uat) if required. 
      default:
        envVars = eaDevEnvironment;
    }
  } else {
    envVars = eaDevEnvironment;
  }

  return envVars;
})();