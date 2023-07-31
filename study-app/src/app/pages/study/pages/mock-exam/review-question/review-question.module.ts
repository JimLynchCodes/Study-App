import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { ReviewQuestionRoutingModule } from "./review-question-routing.module";
import { ReviewQuestionComponent } from "./review-question.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ReviewQuestionRoutingModule
    ],
    declarations: [
        ReviewQuestionComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ReviewQuestionModule { }
