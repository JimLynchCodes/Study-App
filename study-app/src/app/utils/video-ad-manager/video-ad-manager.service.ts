import { Injectable } from "@angular/core";
import { IQuestion, AnswerChoice } from "../../data/_data.models/question.model";
import { environment } from '../../../environments/environment'
import { LoaderService } from "~/app/utils/loader.service";

const admob = require("nativescript-admob");

@Injectable({
    providedIn: 'root'
})
export class VideoAdManagerService {

    constructor() { }

    ngOnInit() {
        console.log('loading?')
    }

    preloadVideoAd() {


        admob.preloadRewardedVideoAd({
            testing: true,
            iosAdPlacementId: "ca-app-pub-5959386651087574~4497233380",
            androidAdPlacementId: "",
            keywords: ["keyword1", "keyword2"], // add keywords for ad targeting
        }).then(
            function () {
                console.log("RewardedVideoAd preloaded - you can now call 'showRewardedVideoAd' whenever you're ready to do so");
            },
            function (error) {
                console.log("admob preloadRewardedVideoAd error: " + error);
            }
        )
    }

    showVideoAd(callback: Function) {
        admob.showRewardedVideoAd({
            onRewarded: (reward) => {
                console.log("onRewarded");

                callback(true)
            },
            onRewardedVideoAdLeftApplication: () => console.log("onRewardedVideoAdLeftApplication"),
            onRewardedVideoAdClosed: () => console.log("onRewardedVideoAdClosed"),
            onRewardedVideoAdOpened: () => console.log("onRewardedVideoAdOpened"),
            onRewardedVideoStarted: () => console.log("onRewardedVideoStarted"),
            onRewardedVideoCompleted: () => console.log("onRewardedVideoCompleted"),
        }).then(
            function () {
                console.log("RewardedVideoAd showing");
            },
            function (error) {

                callback(false)
                console.log("admob showRewardedVideoAd error: " + error);
            }
        )
    }

}