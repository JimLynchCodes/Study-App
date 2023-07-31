// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {
    platformNativeScript,
    runNativeScriptAngularApp,
} from "@nativescript/angular";

import { AppModule } from "./app/app.module";

// platformNativeScriptDynamic().bootstrapModule(AppModule);
runNativeScriptAngularApp({
    appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});
