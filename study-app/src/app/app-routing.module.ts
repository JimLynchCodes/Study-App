import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    { path: "settings", loadChildren: () => import("~/app/settings/settings.module").then((m) => m.SettingsModule) },
    { path: "fastfeedback", loadChildren: () => import("~/app/fast-feedback/fast-feedback.module").then((m) => m.FastFeedbackModule) },
    { path: "ffq", loadChildren: () => import("~/app/fast-feedback-question/fast-feedback-question.module").then((m) => m.FastFeedbackQuestionModule) },
    { path: "ffq/:question", loadChildren: () => import("~/app/fast-feedback-question/fast-feedback-question.module").then((m) => m.FastFeedbackQuestionModule) },
    { path: "mock-exam", loadChildren: () => import("~/app/mock-exam/mock-exam.module").then((m) => m.MockExamModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
