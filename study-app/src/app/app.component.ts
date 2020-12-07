import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import * as app from "tns-core-modules/application";

import { environment } from '../environments/environment';
import { Auth0 } from 'nativescript-auth0';

// TODO - bring back firebase stuff

// const firebase = require("nativescript-plugin-firebase");

// import { crashlytics } from "nativescript-plugin-firebase";

// crashlytics.setString("test_key", "test_value");
// crashlytics.setBool("test_key_bool", true);
// crashlytics.setInt("test_key_int", 2);
// crashlytics.setDouble("test_key_double", 56615.55548465);
// crashlytics.setFloat("test_key", 54646.45);

// crashlytics.setUserId("user#42");

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;

    firebaseInitialized = false;
    
    auth0 
    
    userName: string;
    userPicture: string;
    
    constructor(private router: Router, private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject services.
        
        console.log('app component sees env: ', environment.apiUrl);
        
    }
    
    async ngOnInit(): Promise<void> {
        this._activatedUrl = "/home";
        this._sideDrawerTransition = new SlideInOnTopTransition();
        
        const appConfig = (await import(`./data/${environment.theme}/config`)).config;

        this.auth0 = new Auth0(appConfig.auth0_clientId, appConfig.auth0_domain);

        if (!this.firebaseInitialized)
        // firebase.init({
        //     // Optionally pass in properties for database, authentication and cloud messaging,
        //     // see their respective docs.
        //     crashlyticsCollectionEnabled: true
        // }).then(
        //     () => {

        //         this.firebaseInitialized = true;
        //         console.log("firebase.init done");
        //     },
        //     error => {
        //         console.log(`firebase.init error: ${error}`);
        //     }
        // );

        this.router.events
            .pipe(filter((event: any) => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    async onDrawerAvatarClick() {
        console.log('clicked drawer!')

        console.log('auth0 is ', this.auth0)

        console.log('auth0 is ', this.auth0.webAuthentication)

        try {

            const res = await this.auth0.webAuthentication({
                scope: 'openid profile',
                // audience: 'random.trivia://study-apps.us.auth0.com/ios/random-trivia/'
                audience: 'http://localhost:3000'
            })
            console.log('logged in! ', res)

            const userInfo = await this.auth0.getUserInfo(res.accessToken)

            console.log('user data: ', JSON.stringify(userInfo));

            this.userName = userInfo.nickname
            this.userPicture = userInfo.pictureURL ? userInfo.pictureURL : (userInfo as any).picture

        }

        catch (error) {
            console.log('error logging in: ', error)
            // Sentry.captureException(error, {});
        }

    }

}
