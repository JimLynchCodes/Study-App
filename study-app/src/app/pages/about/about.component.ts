import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { environment } from '../../../environments/environment'

// import * from '../../data/enrolled-agent/static-text';
// import { } from '../../data/sat/static-text'

@Component({
    selector: "About",
    templateUrl: "./about.component.html",
    styleUrls: ["./about.scss"]
})
export class AboutComponent implements OnInit {

    appText

    aboutTitle
    aboutMessage

    constructor() {
        // Use the component constructor to inject providers.
    }

    async ngOnInit(): Promise<void> {
        // Init your component properties here.

        console.log("theme: ", environment.theme)

        // const path = `./../../data/${environment.theme}/static-text`

        // console.lozg('path: ', path)
        // const appText = (await import(path))
        // console.log('apptext', appText);

        const appTextData = await import(`../../data/${environment.theme}/static-text`);

        console.log('got appText: ', appTextData.appText)

        this.aboutTitle = appTextData.appText ? appTextData.appText.aboutTitle : ''
        this.aboutMessage = appTextData.appText ? appTextData.appText.aboutMessage : ''

    }
    

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
