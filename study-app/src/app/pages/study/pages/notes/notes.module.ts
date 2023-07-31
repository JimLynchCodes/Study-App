import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { NotesRoutingModule } from "./notes-routing.module";
import { NotesComponent } from "./notes.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NotesRoutingModule
    ],
    declarations: [
        NotesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NotesModule { }
