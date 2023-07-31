import { Component, OnInit, ViewContainerRef, NgZone } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from '@nativescript/core/application';
import { ModalDialogService, ModalDialogOptions } from "@nativescript/angular";
import { VideoAdManagerService } from "~/app/utils/video-ad-manager/video-ad-manager.service";
import { SettingsModalComponent } from "../settings/modal/settings.modal";

// const firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "Debug",
    templateUrl: "./debug.component.html",
    styleUrls: ["./debug.scss"]
})
export class DebugComponent implements OnInit {

    message = ""

    adPreloadingFinished = false

    videoAdLoadingText: string = 'foo'
    loadingAnotherVideoText : string
    
    rewards = 0

    constructor(private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef,
        private videoAdManager: VideoAdManagerService,
        private zone: NgZone) { }

    async ngOnInit(): Promise<void> {

        this.videoAdLoadingText = 'Loading video ad...'
        this.loadingAnotherVideoText = 'Loading another video...'
        await this.preloadVideo()
    }

    private async preloadVideo(loadingText = 'Loading video ad...') {

        this.videoAdLoadingText = loadingText

        await this.videoAdManager.preloadVideoAd()

        this.videoAdLoadingText = 'Video ad is ready to play!'

        this.adPreloadingFinished = true
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

    async showVideoAd() {

        this.videoAdLoadingText = 'Video ad is playing...'
        this.adPreloadingFinished = false

        // try {
        //     firebase.admob.showRewardedVideoAd({
        //         onRewarded: (reward) => {
        //             console.log("onRewarded");

        //             ++this.rewards;

        //             this.zone.run(() => {
        //                 console.log('enabled time travel');
        //                 this.videoAdLoadingText = 'You watched the ad!';

        //                 const amount = this.rewards === 1 ? 'a' : this.rewards

        //                 const sOrNot = this.rewards === 1 ? '' : 's'

        //                 this.message = `You watched ${amount} video${sOrNot}!`
        //             });
        //         },
        //         onClosed: () => {

        //             console.log('Ad Closed2!')

        //             setTimeout(() => {

        //                 console.log('timeout fired!')

        //                 this.zone.run(async () => {
        //                     await this.preloadVideo(this.loadingAnotherVideoText)
        //                 })

        //             }, 2000)

        //         },
        //         onRewardedVideoAdClosed: () => {

        //             console.log('Ad Closed!')

        //             setTimeout(() => {

        //                 console.log('timeout fired!')

        //                 this.zone.run(async () => {
        //                     await this.preloadVideo(this.loadingAnotherVideoText)
        //                 })

        //             }, 2000)

        //         },
        //         onOpened: () => console.log("onRewardedVideoAdOpened"),
        //         onStarted: () => console.log("onRewardedVideoStarted"),
        //         onCompleted: () => {
        //             console.log("onRewardedVideoCompleted")
        //         },
        //     }).then(
        //         function () {
        //             console.log("showRewardedVideoAd is playing");
        //         },
        //         function (error) {
        //             console.log("admob showRewardedVideoAd error: " + error);
        //             // Sentry.captureException(error, {});
        //         })
                
        //     } catch (err) {
        //         console.log("admob err: " + err);
        //     // Sentry.captureException(err, {});
        // }

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

}
