import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { EventData } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";
// import { EventData } from "tns-core-modules/data/observable";
import { ListPicker } from "tns-core-modules/ui/list-picker";

@Component({
    selector: "MockExam",
    templateUrl: "./mock-exam-question.component.html",
    styleUrls: ["./mock-exam-question.component.scss"] 
})
export class MockExamQuestionComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions) {}

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

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onTap(args: EventData) {

        console.log('clicked!')

        this.routerExtensions.navigate(['/meq', { exam: this.examSelected, time: this.timeSelected }], {
            transition: {
                name: "fade"
            }
        })

    }
}
