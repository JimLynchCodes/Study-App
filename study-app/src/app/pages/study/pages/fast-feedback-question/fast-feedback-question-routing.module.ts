import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { FastFeedbackQuestionComponent } from "./fast-feedback-question.component";

const routes: Routes = [
    { path: "", component: FastFeedbackQuestionComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class FastFeedbackQuestionRoutingModule { }
