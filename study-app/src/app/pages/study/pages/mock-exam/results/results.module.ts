import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { ResultsRoutingModule } from "./results-routing.module";
import { ResultsComponent } from "./results.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ResultsRoutingModule
    ],
    declarations: [
        ResultsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ResultsModule { }
