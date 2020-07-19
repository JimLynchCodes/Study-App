import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { FastFeedbackComponent } from "./fast-feedback.component";

const routes: Routes = [
    { path: "", component: FastFeedbackComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class FastFeedbackRoutingModule { }
