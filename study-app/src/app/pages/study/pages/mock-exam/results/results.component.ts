import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute, Router } from "@angular/router";
import { QuestionGenerator } from "~/app/utils/question-generator/question-generator.service";
import { IQuestion } from "~/app/data/_data.models/question.model";
// import { IQuestion, AnswerChoice } from "../../../../data/_data.models/question.model";
// import { QuestionGenerator } from "../../../../utils/question-generator/question-generator.service";
import { environment } from "../../../../../../environments/environment"
import { MockExamManagerService } from "../mock-exam-question/mock-exam-manager.service";
import { IGrade } from "~/app/data/_data.models/grade.model";

@Component({
    selector: "results",
    templateUrl: "./results.component.html",
    styleUrls: ["./results.component.scss"]
})
export class ResultsComponent implements OnInit {

    grade: IGrade

    constructor(private router: Router,
        private routerExtensions: RouterExtensions,
        private mockExamService: MockExamManagerService) { }

    ngOnInit(): void {
        console.log('loading up review answers component!')

        this.grade = this.mockExamService.getCurrentGrade();

    }

    reviewQ(questionIndex: number) {
        this.routerExtensions.navigate(['/review-question', { questionIndex }], {
            transition: {
                name: "fade"
            }
        })
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

}
