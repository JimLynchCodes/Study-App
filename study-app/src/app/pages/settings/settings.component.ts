import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/common";
import { SettingsModalComponent } from "./modal/settings.modal";
import { VideoAdManagerService } from "~/app/utils/video-ad-manager/video-ad-manager.service";

@Component({
    selector: "Settings",
    templateUrl: "./settings.component.html",
    providers: [ModalDialogService]
})
export class SettingsComponent implements OnInit {

    message = "haven't yet watched the video!"

    constructor(private modalService: ModalDialogService, 
        private viewContainerRef: ViewContainerRef,
        private videoAdManager: VideoAdManagerService) {
        
    }

    ngOnInit(): void {
        // Init your component properties here.

        this.videoAdManager.preloadVideoAd()

    }

    openModalBtnClick() {
        console.log('modal btn clicked');

        const options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef,
            fullscreen: false,
            context: {}
        };
        this.modalService.showModal(SettingsModalComponent, options);

        this.videoAdManager.showVideoAd((reward: boolean) => {

            console.log('heard reward fired! ', reward)

            if (reward)
                this.message = "You watched the video!"
        })

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

}
