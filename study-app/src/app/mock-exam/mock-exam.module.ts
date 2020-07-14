import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MockExamRoutingModule } from "./mock-exam-routing.module";
import { MockExamComponent } from "./mock-exam.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MockExamRoutingModule
    ],
    declarations: [
        MockExamComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MockExamModule { }
