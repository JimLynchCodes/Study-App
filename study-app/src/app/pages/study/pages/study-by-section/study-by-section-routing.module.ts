import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { StudyBySectionComponent } from "./study-by-section.component";

const routes: Routes = [
    { path: "", component: StudyBySectionComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class StudyBySectionRoutingModule { }
