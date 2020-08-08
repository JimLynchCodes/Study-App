import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { StudyRoutingModule } from "./study-routing.module";
import { StudyComponent } from "./study.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        StudyRoutingModule
    ],
    declarations: [
        StudyComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class StudyModule { }
