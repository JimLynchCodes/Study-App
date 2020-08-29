import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/pages/home/home.module").then((m) => m.HomeModule) },
    { path: "about", loadChildren: () => import("~/app/pages/about/about.module").then((m) => m.AboutModule) },
    { path: "study", loadChildren: () => import("~/app/pages/study/study.module").then((m) => m.StudyModule) },
    { path: "settings", loadChildren: () => import("~/app/pages/settings/settings.module").then((m) => m.SettingsModule) },
    { path: "notes", loadChildren: () => import("~/app/pages/study/pages/notes/notes.module").then((m) => m.NotesModule) },
    { path: "ffq", loadChildren: () => import("~/app/pages/study/pages/fast-feedback-question/fast-feedback-question.module").then((m) => m.FastFeedbackQuestionModule) },
    { path: "ffq/:question", loadChildren: () => import("~/app/pages/study/pages/fast-feedback-question/fast-feedback-question.module").then((m) => m.FastFeedbackQuestionModule) },
    { path: "fast-feedback-options", loadChildren: () => import("~/app/pages/study/pages/fast-feedback-options/fast-feedback-options.module").then((m) => m.FastFeedbackOptionsModule) },
    { path: "mock-exam", loadChildren: () => import("~/app/pages/study/pages/mock-exam/mock-exam.module").then((m) => m.MockExamModule) },
    { path: "meq", loadChildren: () => import("~/app/pages/study/pages/mock-exam/mock-exam-question/mock-exam-question.module").then((m) => m.MockExamQuestionModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
