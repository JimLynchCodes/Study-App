import { Component, OnInit, ViewContainerRef, NgZone } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from '@nativescript/core/application';
import { ModalDialogService, ModalDialogOptions } from "@nativescript/angular";
import { SettingsModalComponent } from "./modal/settings.modal";
import { VideoAdManagerService } from "~/app/utils/video-ad-manager/video-ad-manager.service";

import { ApplicationSettings } from '@nativescript/core';


// const firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "Settings",
    templateUrl: "./settings.component.html",
    providers: [ModalDialogService],
    styleUrls: ['./settings.scss']
})
export class SettingsComponent implements OnInit {

    message = ""

    adPreloadingFinished = false

    videoAdLabelText = 'loading video ad...'

    rewards = 0

    darkModeEnabled = false

    isCool = false

    constructor(private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef,
        private videoAdManager: VideoAdManagerService,
        private zone: NgZone) { }

    async ngOnInit(): Promise<void> {
        this.isCool = ApplicationSettings.getBoolean('isCool')
    }

    openModalBtnClick() {
        console.log('modal btn clicked');

        const options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef,
            fullscreen: false,
            context: {}
        };

        this.modalService.showModal(SettingsModalComponent, options);

    }

    onDarkModeToggleClicked(): void {
        this.darkModeEnabled = !this.darkModeEnabled
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    coolnessToggle(): void {
        this.isCool = !this.isCool
        // console.log('coolness toggle changed !', this.isCool)

        // localStorage.setItem('isCool', '' + this.isCool);

        // setBoolean('isCool', this.isCool)
    }

}
