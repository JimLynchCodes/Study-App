import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import * as app from "tns-core-modules/application";

import { environment } from '../environments/environment';
import { Auth0 } from 'nativescript-auth0';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;

    auth0 = new Auth0('X2GJeUYQF8ZHmDzn53r345iRHiBpdMgw', 'enrolled-agent-study-app.us.auth0.com');

    userName: string;
    userPicture: string;

    constructor(private router: Router, private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject services.

        console.log('app component sees env: ', environment.apiUrl);

    }

    ngOnInit(): void {
        this._activatedUrl = "/home";
        this._sideDrawerTransition = new SlideInOnTopTransition();

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
                scope: 'openid profile'
            })
            console.log('logged in! ', res)

            const userInfo = await this.auth0.getUserInfo(res.accessToken)

            console.log('user data: ', JSON.stringify(userInfo));

            this.userName = userInfo.name
            this.userPicture = userInfo.pictureURL ? userInfo.pictureURL : (userInfo as any).picture

        }

        catch (error) {
            console.log('error logging in: ', error)
        }

    }

}
