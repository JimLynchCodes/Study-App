import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { FastFeedbackRoutingModule } from "./fast-feedback-routing.module";
import { FastFeedbackComponent } from "./fast-feedback.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FastFeedbackRoutingModule
    ],
    declarations: [
        FastFeedbackComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FastFeedbackModule { }
