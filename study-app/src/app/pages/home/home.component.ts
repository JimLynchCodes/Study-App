import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from '@nativescript/core/application';
import { environment } from '../../../environments/environment'

// import * from '../../data/enrolled-agent/static-text';
// import { } from '../../data/sat/static-text'

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.scss"]
})
export class HomeComponent implements OnInit {

    appText

    homeTitle
    homeMessage

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

        this.homeTitle = appTextData.appText ? appTextData.appText.homeTitle : ''
        this.homeMessage = appTextData.appText ? appTextData.appText.homeMessage : ''

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
