import { Injectable } from "@angular/core";
import { IQuestion, AnswerChoice } from "../../data/_data.models/question.model";
import { environment } from '../../../environments/environment'
import { LoaderService } from "~/app/utils/loader.service";

const firebase = require("nativescript-plugin-firebase");

@Injectable({
    providedIn: 'root'
})
export class VideoAdManagerService {

    constructor() { }

    ngOnInit() {
        console.log('loading?')
    }

    preloadVideoAd(): Promise<void> {

        // admob.preloadInterstitial({
        //     testing: true,
        //     iosInterstitialId: "ca-app-pub-5959386651087574~4497233380",
        //     androidInterstitialId: "", // add your own
        //     iosTestDeviceIds: [],
        //     keywords: ["keyword1", "keyword2"], // add keywords for ad targeting
        //     onAdClosed: function () { console.log("interstitial closed") }
        // }).then(
        //     function () {
        //         console.log("interstitial preloaded - you can now call 'showInterstitial' whenever you're ready to do so");
        //     },
        //     function (error) {
        //         console.log("admob preloadInterstitial error: " + error);
        //     }
        // )

        return new Promise((resolve, reject) => {

            firebase.admob.preloadRewardedVideoAd({
                testing: true,
                iosAdPlacementId: "ca-app-pub-5959386651087574/7395693610", // add your own
                androidAdPlacementId: "ca-app-pub-5959386651087574/7395693610", // add your own
                keywords: ["keyword1", "keyword2"], // add keywords for ad targeting
            }).then(
                function () {
                    console.log("RewardedVideoAd preloaded - you can now call 'showRewardedVideoAd' whenever you're ready to do so");
                    resolve()
                },
                function (error) {
                    console.log("admob preloadRewardedVideoAd error: " + error);
                    reject()
                }
            )

            // ca-app-pub-5959386651087574/7395693610
            //     firebase.admob.preloadRewardedVideoAd({
            //         testing: true,
            //         iosAdPlacementId: "ca-app-pub-5959386651087574~4497233380",
            //         // iosInterstitialId: "ca-app-pub-5959386651087574~4497233380",
            //         androidAdPlacementId: "ca-app-pub-5959386651087574~4497233380",
            //         iosTestDeviceIds: [],
            //         keywords: [], // add keywords for ad targeting
            //     }).then(
            //         function () {
            //             console.log("RewardedVideoAd preloaded - you can now call 'showRewardedVideoAd' whenever you're ready to do so");
            //             resolve()
            //         },
            //         function (error) {
            //             console.log("admob preloadRewardedVideoAd error: " + error);
            //             reject()
            //         })
        })
    }



}