import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/study", pathMatch: "full" },
    { path: "study", loadChildren: () => import("~/app/pages/study/study.module").then((m) => m.StudyModule) },
    { path: "about", loadChildren: () => import("~/app/pages/about/about.module").then((m) => m.AboutModule) },
    { path: "settings", loadChildren: () => import("~/app/pages/settings/settings.module").then((m) => m.SettingsModule) },
    { path: "debug", loadChildren: () => import("~/app/pages/debug/debug.module").then((m) => m.DebugModule) },
    { path: "continuing-education", loadChildren: () => import("~/app/pages/continuing-education/continuing-education.module").then((m) => m.ContinuingEducationModule) },
    { path: "exam-info", loadChildren: () => import("~/app/pages/exam-info/exam-info.module").then((m) => m.ExamInfoModule) },
    { path: "notes", loadChildren: () => import("~/app/pages/study/pages/notes/notes.module").then((m) => m.NotesModule) },
    { path: "ffq", loadChildren: () => import("~/app/pages/study/pages/fast-feedback-question/fast-feedback-question.module").then((m) => m.FastFeedbackQuestionModule) },
    { path: "ffq/:question", loadChildren: () => import("~/app/pages/study/pages/fast-feedback-question/fast-feedback-question.module").then((m) => m.FastFeedbackQuestionModule) },
    { path: "fast-feedback-options", loadChildren: () => import("~/app/pages/study/pages/fast-feedback-options/fast-feedback-options.module").then((m) => m.FastFeedbackOptionsModule) },
    { path: "mock-exam", loadChildren: () => import("~/app/pages/study/pages/mock-exam/mock-exam.module").then((m) => m.MockExamModule) },
    { path: "meq", loadChildren: () => import("~/app/pages/study/pages/mock-exam/mock-exam-question/mock-exam-question.module").then((m) => m.MockExamQuestionModule) },
    { path: "review-answers", loadChildren: () => import("~/app/pages/study/pages/mock-exam/review-answers/review-answers.module").then((m) => m.ReviewAnswersModule) },
    { path: "results", loadChildren: () => import("~/app/pages/study/pages/mock-exam/results/results.module").then((m) => m.ResultsModule) },
    { path: "review-question", loadChildren: () => import("~/app/pages/study/pages/mock-exam/review-question/review-question.module").then((m) => m.ReviewQuestionModule) },
    { path: "home", loadChildren: () => import("~/app/pages/home/home.module").then((m) => m.HomeModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
