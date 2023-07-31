import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { MockExamQuestionRoutingModule } from "./mock-exam-question-routing.module";
import { MockExamQuestionComponent } from "./mock-exam-question.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MockExamQuestionRoutingModule
    ],
    declarations: [
        MockExamQuestionComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MockExamQuestionModule { }
