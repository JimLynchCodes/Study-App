import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { QuestionGenerator } from "./utils/question-generator/question-generator.service";
import { VideoAdManagerService } from "./utils/video-ad-manager/video-ad-manager.service";
import { SettingsModalComponent } from "./pages/settings/modal/settings.modal";
import { AreYouSureExamSubmitModalComponent } from "./pages/study/pages/mock-exam/review-answers/are-you-sure-exam-submit.modal";
import { TimesUpModalComponent } from "./pages/study/pages/mock-exam/times-up.modal";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// import { SentryModule } from 'nativescript-sentry/angular';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptFormsModule
        // ExamModule
        // SentryModule.forRoot({dsn: 'https://e552084ca37c4bf787e2bcb14fe3a0ad@o455963.ingest.sentry.io/5448325'})
    ],
    declarations: [
        AppComponent,
        SettingsModalComponent,
        AreYouSureExamSubmitModalComponent,
        TimesUpModalComponent,
        // ExamComponent,
        // DebugComponent
    ],
    providers: [
        QuestionGenerator,
        VideoAdManagerService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [
        SettingsModalComponent,
        AreYouSureExamSubmitModalComponent,
        TimesUpModalComponent
    ]
})
export class AppModule { }
