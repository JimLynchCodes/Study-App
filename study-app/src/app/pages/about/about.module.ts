import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { AboutComponent } from "./about.component";
import { AboutRoutingModule } from "./about-routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AboutRoutingModule
    ],
    declarations: [
        AboutComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AboutModule { }
