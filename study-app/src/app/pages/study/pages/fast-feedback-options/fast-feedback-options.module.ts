import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { FastFeedbackOptionsRoutingModule } from "./fast-feedback-options-routing.module";
import { FastFeedbackOptionsComponent } from "./fast-feedback-options.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FastFeedbackOptionsRoutingModule
    ],
    declarations: [
        FastFeedbackOptionsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FastFeedbackOptionsModule { }
