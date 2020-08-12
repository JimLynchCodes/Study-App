import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { EventData } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";
import { chapters } from "../../../../data/chapters";

@Component({
    selector: "FastFeedbackOptions",
    templateUrl: "./fast-feedback-options.component.html",
    styleUrls: ["./fast-feedback-options.scss"]
})
export class FastFeedbackOptionsComponent implements OnInit {

    chapters = chapters;
     
    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.

        console.log('chapters are: ', chapters)
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onTap(arg: EventData) {

        if (arg)
            this.routerExtensions.navigate([arg], {
                transition: {
                    name: "fade"
                }
            })

    }

    onCheckedChange(value: boolean, chapter: string) {


        console.log('stuff here: ', value)
        console.log('stuff here: ', chapter)

        // Object.keys(event).forEach( key => {
        //     console.log('stuff here: ', key)
        // })

    }

    onNextBtnTap() {
        this.routerExtensions.navigate(['/ffq'], {
            transition: {
                name: "fade"
            }
        })
    }

}
