import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/pages/home/home.module").then((m) => m.HomeModule) },
    { path: "settings", loadChildren: () => import("~/app/pages/settings/settings.module").then((m) => m.SettingsModule) },
    { path: "study", loadChildren: () => import("~/app/pages/study/study.module").then((m) => m.StudyModule) },
    // { path: "ffq", loadChildren: () => import("~/app/pages/study/pages/fast-feedback-question/fast-feedback-question.module").then((m) => m.FastFeedbackQuestionModule) },
    { path: "ffq", loadChildren: () => import("~/app/pages/study/pages/fast-feedback-question/fast-feedback-question.module").then((m) => m.FastFeedbackQuestionModule) },
    { path: "ffq/:question", loadChildren: () => import("~/app/pages/study/pages/fast-feedback-question/fast-feedback-question.module").then((m) => m.FastFeedbackQuestionModule) },
    { path: "study-by-section", loadChildren: () => import("~/app/pages/study/pages/study-by-section/study-by-section.module").then((m) => m.StudyBySectionModule) },
    { path: "mock-exam", loadChildren: () => import("~/app/mock-exam/mock-exam.module").then((m) => m.MockExamModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
