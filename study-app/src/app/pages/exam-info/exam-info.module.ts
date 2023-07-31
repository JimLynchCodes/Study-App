import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { ExamInfoComponent } from "./exam-info.component";
import { ExamInfoRoutingModule } from "./exam-info-routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ExamInfoRoutingModule
    ],
    declarations: [
        ExamInfoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ExamInfoModule { }
