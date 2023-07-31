import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { MockExamQuestionComponent } from "./mock-exam-question.component";

const routes: Routes = [
    { path: "", component: MockExamQuestionComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MockExamQuestionRoutingModule { }
