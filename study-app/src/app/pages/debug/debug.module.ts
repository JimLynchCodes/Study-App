import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { DebugComponent } from "./debug.component";
import { DebugRoutingModule } from "./debug-routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DebugRoutingModule
    ],
    declarations: [
        DebugComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DebugModule { }
