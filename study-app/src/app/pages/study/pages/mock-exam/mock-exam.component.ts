import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { EventData } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "MockExam",
    templateUrl: "./mock-exam.component.html"
})
export class MockExamComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions) {}

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onTap(args: EventData) {

        this.routerExtensions.navigate([args], {
            transition: {
                name: "fade"
            }

        })

    }
}
