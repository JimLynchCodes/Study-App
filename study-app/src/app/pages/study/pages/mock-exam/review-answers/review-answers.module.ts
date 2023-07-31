import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { ReviewAnswersRoutingModule } from "./review-answers-routing.module";
import { ReviewAnswersComponent } from "./review-answers.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ReviewAnswersRoutingModule
    ],
    declarations: [
        ReviewAnswersComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ReviewAnswersModule { }
