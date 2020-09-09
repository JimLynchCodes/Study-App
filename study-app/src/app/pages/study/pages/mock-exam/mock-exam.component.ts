import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { EventData } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { MockExamManagerService } from "./mock-exam-question/mock-exam-manager.service";

@Component({
    selector: "mock-exam",
    templateUrl: "./mock-exam.component.html",
    styleUrls: ["./mock-exam.component.scss"]
})
export class MockExamComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions,
        private readonly mockExamManager: MockExamManagerService) { }

    public years: Array<number> = [1980, 1990, 2000, 2010, 2020];
    public exams: Array<string> = ['Business', 'Accounting', 'Other stuff'];
    private examSelected

    public times: Array<string> = ['Full Exam (100q / 3.5hr', 'Halfer (50q / 1.75hr', '60 Minute Dash (28q / 1hr)', '30 Minute Dash (15q / 30min)', '20 Minute Dash (10q / 20min)', '10 Minute Dash (5q / 10min)'];
    private timeSelected

    public onSelectedExamIndexChanged(args: EventData) {
        const picker = <ListPicker>args.object;
        console.log(`index: ${picker.selectedIndex}; item" ${this.years[picker.selectedIndex]}`);
        this.examSelected = this.years[picker.selectedIndex]
    }
    public onSelectedTimeIndexChanged(args: EventData) {
        const picker = <ListPicker>args.object;
        console.log(`index: ${picker.selectedIndex}; item" ${this.years[picker.selectedIndex]}`);
        this.timeSelected = this.times[picker.selectedIndex]
    }

    ngOnInit(): void {
        // Init your component properties here.
    }


    async onTap(args: EventData) {

        console.log('start exam clicked!');
        console.log(`choosing questions based on examSelected: ${this.examSelected} and time selected: ${this.timeSelected}` );        

        // generate exam questions

        await this.mockExamManager.generateExamQuestions(20, '1,2,3,4,5,6,7,8,9,10,11,12')

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
