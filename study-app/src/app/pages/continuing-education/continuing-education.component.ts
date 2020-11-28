import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { environment } from '../../../environments/environment'

@Component({
    selector: "Continuing Education",
    templateUrl: "./continuing-education.component.html",
    styleUrls: ["./continuing-education.scss"]
})
export class ContinuingEducationComponent implements OnInit {

    appText

    continuingEducationTitle
    continuingEducationMessage

    constructor() {}

    async ngOnInit(): Promise<void> {

        console.log("theme: ", environment.theme)

        const appTextData = await import(`../../data/${environment.theme}/static-text`);

        console.log('got appText: ', appTextData.appText)

        this.continuingEducationTitle = appTextData.appText ? appTextData.appText.continuingEducationTitle : ''
        this.continuingEducationMessage = appTextData.appText ? appTextData.appText.continuingEducationMessage : ''

    }
    

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
