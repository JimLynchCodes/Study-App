import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { ContinuingEducationComponent } from "./continuing-education.component";
import { ContinuingEducationRoutingModule } from "./continuing-education-routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ContinuingEducationRoutingModule
    ],
    declarations: [
        ContinuingEducationComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ContinuingEducationModule { }
