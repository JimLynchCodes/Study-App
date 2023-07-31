import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { ExamInfoComponent } from "./exam-info.component";

const routes: Routes = [
    { path: "", component: ExamInfoComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ExamInfoRoutingModule { }
