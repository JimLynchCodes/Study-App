import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { FastFeedbackQuestionRoutingModule } from "./fast-feedback-question-routing.module";
import { FastFeedbackQuestionComponent } from "./fast-feedback-question.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FastFeedbackQuestionRoutingModule
    ],
    declarations: [
        FastFeedbackQuestionComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FastFeedbackQuestionModule { }
