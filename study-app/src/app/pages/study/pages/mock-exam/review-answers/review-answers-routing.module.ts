import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ReviewAnswersComponent } from "./review-answers.component";

const routes: Routes = [
    { path: "", component: ReviewAnswersComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ReviewAnswersRoutingModule { }
