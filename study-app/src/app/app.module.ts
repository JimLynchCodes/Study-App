import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { QuestionGenerator } from "./utils/question-generator/question-generator.service";
import { SettingsModalComponent } from "./pages/settings/modal/settings.modal";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        SettingsModalComponent
    ],
    providers: [
        QuestionGenerator
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [
        SettingsModalComponent
    ]
})
export class AppModule { }
