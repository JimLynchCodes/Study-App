import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { EventData } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";
import { environment } from '../../../environments/environment'

@Component({
    selector: "Study",
    templateUrl: "./study.component.html",
    styleUrls: ["./study.component.scss"]
})
export class StudyComponent implements OnInit {

    mockExamButtonLabel: string

    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    async ngOnInit(): Promise<void> {

        const appTextData = (await import(`../../data/${environment.theme}/static-text`)).appText;

        this.mockExamButtonLabel = appTextData.mockExamButtonLabel

        console.log('got mockExamButtonLabel: ', this.mockExamButtonLabel)

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

}
