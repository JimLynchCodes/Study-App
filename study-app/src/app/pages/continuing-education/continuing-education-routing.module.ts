import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ContinuingEducationComponent } from "./continuing-education.component";

const routes: Routes = [
    { path: "", component: ContinuingEducationComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ContinuingEducationRoutingModule { }
