import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from '@nativescript/core/application';
import { environment } from '../../../environments/environment'

// import * from '../../data/enrolled-agent/static-text';
// import { } from '../../data/sat/static-text'

@Component({
    selector: "Continuing Education",
    templateUrl: "./exam-info.component.html",
    styleUrls: ["./exam-info.scss"]
})
export class ExamInfoComponent implements OnInit {

    appText

    examInfoTitle
    examInfoMessage

    examInfoP1 = `You can find the most recent and up-to-date information on the EA exam at the official site:
    
        https://google.com
    `

    constructor() { }

    async ngOnInit(): Promise<void> {

        console.log("theme: ", environment.theme)

        const appTextData = await import(`../../data/${environment.theme}/static-text`);

        console.log('got appText: ', appTextData.appText)

        this.examInfoTitle = appTextData.appText ? appTextData.appText.examInfoTitle : ''
        this.examInfoMessage = appTextData.appText ? appTextData.appText.examInfoMessage : ''

    }
    
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
