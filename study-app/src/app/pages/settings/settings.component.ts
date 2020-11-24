import { Component, OnInit, ViewContainerRef, NgZone } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/common";
import { SettingsModalComponent } from "./modal/settings.modal";
import { VideoAdManagerService } from "~/app/utils/video-ad-manager/video-ad-manager.service";

const firebase = require("nativescript-plugin-firebase");

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

    constructor(private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef,
        private videoAdManager: VideoAdManagerService,
        private zone: NgZone) { }

    async ngOnInit(): Promise<void> {
        await this.preloadVideo()
    }

    private async preloadVideo(loadingText = 'loading video...') {

        this.videoAdLabelText = loadingText

        await this.videoAdManager.preloadVideoAd()

        console.log(loadingText)

        this.videoAdLabelText = 'video ad is ready to play!'

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

        this.videoAdLabelText = 'video ad is playing...'
        this.adPreloadingFinished = false

        try {
            firebase.admob.showRewardedVideoAd({
                onRewarded: (reward) => {
                    console.log("onRewarded");

                    ++this.rewards;

                    this.zone.run(() => {
                        console.log('enabled time travel');
                        this.videoAdLabelText = 'watched the ad!';

                        const amount = this.rewards === 1 ? 'a' : this.rewards

                        const sOrNot = this.rewards === 1 ? '' : 's'

                        this.message = `You watched ${amount} video${sOrNot}. Now you get ${amount} reward${sOrNot}!`
                    });
                },
                onClosed: () => {

                    console.log('Ad Closed2!')

                    setTimeout(() => {

                        console.log('timeout fired!')

                        this.zone.run(async () => {
                            await this.preloadVideo('loading another video...')
                        })

                    }, 2000)

                },
                onRewardedVideoAdClosed: () => {

                    console.log('Ad Closed!')

                    setTimeout(() => {

                        console.log('timeout fired!')

                        this.zone.run(async () => {
                            await this.preloadVideo('loading another video...')
                        })

                    }, 2000)

                },
                onOpened: () => console.log("onRewardedVideoAdOpened"),
                onStarted: () => console.log("onRewardedVideoStarted"),
                onCompleted: () => {
                    console.log("onRewardedVideoCompleted")
                },
            }).then(
                function () {
                    console.log("showRewardedVideoAd is playing");
                },
                function (error) {
                    console.log("admob showRewardedVideoAd error: " + error);
                    // Sentry.captureException(error, {});
                })
                
            } catch (err) {
                console.log("admob err: " + err);
            // Sentry.captureException(err, {});
        }

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

}
