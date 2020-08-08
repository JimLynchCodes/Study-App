import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { StudyBySectionRoutingModule } from "./study-by-section-routing.module";
import { StudyBySectionComponent } from "./study-by-section.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        StudyBySectionRoutingModule
    ],
    declarations: [
        StudyBySectionComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class StudyBySectionModule { }
