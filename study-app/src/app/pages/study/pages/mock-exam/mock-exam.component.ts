import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { EventData } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { MockExamManagerService } from "./mock-exam-question/mock-exam-manager.service";
import { EaExam, ExamTime } from "./ea-exam.model";
import { environment } from '../../../../../environments/environment'

@Component({
    selector: "mock-exam",
    templateUrl: "./mock-exam.component.html",
    styleUrls: ["./mock-exam.component.scss"]
})
export class MockExamComponent implements OnInit {

    staticText = '' 
    chooseExamLabel = '' 
    mockExamHowLongPickerLabel = '' 
    mockExamHowLongQuestion = '' 
    mockExamGoodLuckText = '' 
    mockExamStartBtnLabel = '' 

    constructor(private routerExtensions: RouterExtensions,
        private readonly mockExamManager: MockExamManagerService) { }

    // public exams: Array<string> = [
    //     EaExam.Individuals,
    //     EaExam.Business,
    //     EaExam.RepresentationPracticeProcedures
    // ];

    public exams: Array<string> = []

    mockExamTitle: string = ''

    private examSelected

    public times: Array<string> = [
        ExamTime.q100,
        ExamTime.q50,
        ExamTime.q28,
        ExamTime.q15,
        ExamTime.q5,
        ExamTime.q1
    ]

    private timeSelected

    public onSelectedExamIndexChanged(args: EventData) {
        const picker = <ListPicker>args.object;
        console.log(`index: ${picker.selectedIndex}; item"`);
        this.examSelected = this.exams[picker.selectedIndex]
    }
    
    public onSelectedTimeIndexChanged(args: EventData) {
        const picker = <ListPicker>args.object;
        console.log(`index: ${picker.selectedIndex}; item"`);
        this.timeSelected = this.times[picker.selectedIndex]
    }

    async ngOnInit(): Promise<void> {
        const appTextData = await import(`../../../../data/${environment.theme}/static-text`);

        console.log('got appText: ', appTextData.appText)

        this.staticText = appTextData.appText
        this.mockExamTitle = appTextData.appText.mockExamTitle
        this.chooseExamLabel = appTextData.appText.chooseExamLabel
        this.mockExamHowLongPickerLabel = appTextData.appText.mockExamHowLongPickerLabel
        this.mockExamHowLongQuestion = appTextData.appText.mockExamHowLongQuestion
        this.mockExamGoodLuckText = appTextData.appText.mockExamGoodLuckText
        this.mockExamStartBtnLabel = appTextData.appText.mockExamStartBtnLabel

        appTextData.appText.examChoices.forEach( choiceObj => {
            console.log('got a choice! ', choiceObj.title)
            this.exams.push(choiceObj.title)
        })

        // this.exams = appTextData.appText ? appTextData.appText.examChoices.map( choice => choice.title ) : []

        console.log('exams are', this.exams)
    }


    async onTap(args: EventData) {

        console.log('start exam clicked!');
        console.log(`choosing questions based on examSelected: ${this.examSelected} and time selected: ${this.timeSelected}`);

        this.mockExamManager.resetExam();

        this.mockExamManager.resetTimer(this.timeSelected)

        this.mockExamManager.setExamSelected(this.examSelected);

        this.mockExamManager.initializeTimer();

        // generates 20 exam questions, randomly choosing from all 20 chapters
        // await this.mockExamManager.generateExamQuestions(20, '1,2,3,4,5,6,7,8,9,10,11,12')
        await this.mockExamManager.generateExamQuestions(this.timeSelected, this.examSelected)

        this.routerExtensions.navigate(['/meq', { questionIndex: 0 }], {
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
