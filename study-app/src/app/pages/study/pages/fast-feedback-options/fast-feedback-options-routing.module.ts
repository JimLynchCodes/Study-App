import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { FastFeedbackOptionsComponent } from "./fast-feedback-options.component";

const routes: Routes = [
    { path: "", component: FastFeedbackOptionsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class FastFeedbackOptionsRoutingModule { }
